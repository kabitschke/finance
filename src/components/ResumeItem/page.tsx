import { Icon, LucideIcon } from 'lucide-react';
import styles from './page.module.css';

type Props = {
  title: string;
  msg: string;
  value: number;
  icon: LucideIcon;
  background?: string;
  color?: string;
}

export const ResumeItem = ({ title, msg, background, color, value, icon: Icon }: Props) => {

 const displayValue = value < 0 
  ? `R$ -${Math.abs(value).toLocaleString('pt-BR')}` 
  : value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

  return (
    <div className={styles.container}>

      <div className={styles.cardContainer}>

      <div className={styles.icon} style={{ backgroundColor: `${background}` , color: `${color}` }}><Icon size={20} /></div>

      <div className={styles.card}>

        <div className={styles.title}>{title}</div>
        <div className={styles.value}
          style={{ color: `${value < 0 ? '#FA5660' : '#4AC56E'}` }}
        >{displayValue}</div>

        <div className={styles.title}>{msg}</div>

      </div>

      </div>

    </div>
  );
}