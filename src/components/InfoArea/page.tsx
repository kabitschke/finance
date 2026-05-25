import { ArrowLeft, ArrowRight, Calendar, Scale, TrendingDown, TrendingUp } from 'lucide-react';
import styles from './page.module.css';
import { formatCurrentMonth } from '@/helpers/dateFilter';
import { ResumeItem } from '../ResumeItem/page';

type Props = {
    currentMonth: string;
    /**Uma função que não retorna nada com parametro newMonth */
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}



export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {

    const balance = parseFloat((income - expense).toFixed(2));

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        /**A classe Date é instaciada em currentDate, passando o ano mês e dia em number  */
        currentDate.setMonth(currentDate.getMonth() - 1);
        /** setMonth() é um método da classe Date getMoth() pega o mês e volta com -1 */
        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`)
        /**onMonthChange atualiza o estado, Formatação da data para exibição */

    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`)

    }


    return (
        <div className={styles.container}>
            <div className={styles.monthArea}>
                <div className={styles.arrowLeft}
                    onClick={handlePrevMonth}><ArrowLeft size={18} /></div>

                <div className={styles.monthTitle}>

                    <Calendar size={18} /> {formatCurrentMonth(currentMonth)}
                </div>

                <div onClick={handleNextMonth} className={styles.arrowRight}><ArrowRight size={18} /></div>

            </div>

            <div className={styles.resumeArea}>
                <ResumeItem type='income' title="Receitas" msg="Total de entradas" icon={TrendingUp} value={income} />
                <ResumeItem type='expense' title="Despesas" msg="Total de saídas" background='#FD4654' color='#0E152F' icon={TrendingDown} value={expense} />
                <ResumeItem type='balance' title="Balanço" msg="Saldo do mês" icon={Scale} value={balance} />
            </div>
        </div>
    )
}