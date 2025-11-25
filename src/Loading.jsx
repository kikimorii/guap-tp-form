import styles from './Loading.module.scss';

export default function Loading() {
    return (
        <div className={styles.wrapper}>
            <h4>Отправка данных...</h4>
            <div className={styles.loader}></div>
        </div>
    )
}