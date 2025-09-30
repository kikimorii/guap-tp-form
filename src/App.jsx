import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { getBuildingsList, getServerResponse, schema, transformData, useAuditorium } from './utils';
import { TextInput, SelectInput } from './components';
import styles from './App.module.scss';
import { useNavigate } from "react-router-dom";

const buildingsList = getBuildingsList();

export default function App() {
  const navigate = useNavigate();
  const { register, handleSubmit, control, formState: { errors }, reset, setValue, watch } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      title: '',
      building: null,
      auditorium: null
    },
  });

  const { auditoriumList, changeAuditorium, setAuditoriumList } = useAuditorium(setValue, getServerResponse);

  const onSubmit = (data) => {
    const postData = transformData(data);
    console.log('Данные для отправки:', postData);
    fetch("https://octs.guap.ru/services/n8n/webhook/webhook/05b6e16a-be07-4613-855d-fd185fae3a77", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ postData })
    }).then((r) => {
      if (r.status === 200) {
        navigate("/success");
      }
    });
  };

  const values = watch();
  const isFormEmpty = Object.values(values).every(v => !v);

  return (
    <>
      <div className={styles.wrapper}>
        <h3>Нашёл поломку?<br />Сообщи нам!</h3>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <TextInput placeholder="Как Вас зовут?" register={register} error={errors.name} registerField="name" />
          <TextInput placeholder="Укажите почту для обратной связи" register={register} error={errors.email} registerField="email" />
          <TextInput placeholder="Что случилось?" register={register} error={errors.title} registerField="title" textarea={true} />
          <SelectInput placeholder="В каком корпусе это приключилось?" name="building" control={control} options={buildingsList} error={errors.building} changeAuditorium={changeAuditorium} />
          <SelectInput placeholder="Какая аудитория рядом?" name="auditorium" control={control} options={auditoriumList} error={errors.auditorium} isDisabled={(auditoriumList === null)} />
          <button className={"btn-text primary filled"} type="submit">Отправить</button>
          <button className={`btn-text ${isFormEmpty ? "disabled" : "secondary"} filled`} type="button" onClick={() => { reset(); setAuditoriumList(null) }} disabled={isFormEmpty}>Сбросить</button>
        </form>
      </div>
    </>
  );
}
