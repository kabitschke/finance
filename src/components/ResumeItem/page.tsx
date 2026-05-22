import styles from './page.module.css';

type Props = {
  title: string;
  value: number;
}

export const ResumeItem = ({ title, value }: Props) => {

  return (
    <div className={styles.container}>

      <div className={styles.title}>{title}</div>

      <div
        className={styles.info}
        style={{ color: `${value < 0 ? 'red' : 'black'}` }}
      >{value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })}</div>

    </div>
  );
}