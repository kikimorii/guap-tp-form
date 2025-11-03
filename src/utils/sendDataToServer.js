import { transformData } from "./";

export const sendDateToServer = (data, images, navigate) => {
    console.log(data);
    console.log(images);
    const postData = transformData(data, images);
    console.log('Данные для отправки:', postData);
    fetch("", {
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