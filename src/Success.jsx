import styles from './App.module.scss';
const successAlert = {
    "color": "#155724",
    "backgroundColor": "#d4edda",
    "padding": ".75rem 1.25rem",
    "border": "1px solid transparent",
    "borderRadius": ".25rem",
    "boxSizing": "border-box"
}

export default function Success() {
    return (
        <div className={styles.wrapper}>
            <div style={successAlert}>Ваша заявка была успешно отправлена.</div>
        </div>
    )
}