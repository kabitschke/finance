import { ArrowLeft, ArrowRight } from 'lucide-react';
import styles from './page.module.css';
import { formatCurrentMonth } from '@/helpers/dateFilter';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
}



export const InfoArea = ({ currentMonth, onMonthChange }: Props) => {

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}- ${currentDate.getMonth() + 1}`)

    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}- ${currentDate.getMonth() + 1}`)

    }


    return (
        <div className={styles.container}>
            <div className={styles.monthArea}>
                <div className={styles.arrowLeft}
                    onClick={handlePrevMonth}><ArrowLeft /></div>

                <div className={styles.monthTitle}
                >{formatCurrentMonth(currentMonth)}</div>

                <div onClick={handleNextMonth} className={styles.arrowRight}><ArrowRight /></div>

            </div>

            <div className={styles.resumeArea}>

            </div>
        </div>
    )
}