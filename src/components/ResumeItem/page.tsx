import { Icon, LucideIcon } from 'lucide-react';
import styles from './page.module.css';

type Props = {
  title: string;
  msg: string;
  value: number;
  icon: LucideIcon;
}

export const ResumeItem = ({ title, msg, value, icon: Icon }: Props) => {

  return (
    <div className={styles.container}>

      <div className={styles.card}>

        <div><Icon size={20} /></div>

        <div className={styles.title}>{title}</div>
        <div
          className={styles.value}
          style={{ color: `${value < 0 ? 'red' : 'black'}` }}
        >{value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}</div>

        <div className={styles.title}>{msg}</div>

      </div>

    </div>
  );
}