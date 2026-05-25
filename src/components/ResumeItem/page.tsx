import { Icon, LucideIcon } from 'lucide-react';
import styles from './page.module.css';
import { formatCurrencyBrl } from '@/helpers/dateFilter';

type Props = {
  title: string;
  msg: string;
  value: number;
  icon: LucideIcon;
  background?: string;
  color?: string;
  type?: 'income' | 'expense' | 'balance';
}

export const ResumeItem = ({ title, type, msg, background, color, value, icon: Icon }: Props) => {


  const getColor = () => {
    if (type === 'expense') return '#FA5660';
    if (type === 'income') return '#4AC56E';
    return value < 0 ? '#FA5660' : '#4AC56E';
  };

  return (
    <div className={styles.container}>

      <div className={styles.cardContainer}>

        <div className={styles.icon} style={{ backgroundColor: `${background}`, color: `${color}` }}><Icon size={20} /></div>

        <div className={styles.card}>

          <div className={styles.title}>{title}</div>
          <div className={styles.value}
            style={{ color: getColor() }}
          >{formatCurrencyBrl(value)}</div>

          <div className={styles.title}>{msg}</div>

        </div>

      </div>

    </div>
  );
}