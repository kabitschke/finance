'use client'
import styles from "./page.module.css";
import { useEffect, useState } from 'react';
import { Item } from '@/types/Item';
import { items } from '@/data/items';
import { Category } from '@/types/Category';
import { categories } from "@/data/categories";
import { filterListByMonth, getCurrentMonth } from "@/helpers/dateFilter";
import { TableArea } from "@/components/TableArea/page";
import { InfoArea } from "@/components/InfoArea/page";



export default function Home() {
  const [list, setList] = useState(items);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));

  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    /**Quando o mês trocar */
    setCurrentMonth(newMonth);
  }

  return (
    <div className={styles.container}>

      <div className={styles.header}>

        <h1 className={styles.title}>Sistema Financeiro</h1>

      </div>

      <div className={styles.body}>

        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}

        />

        {/* Área de inserção  */}



        <TableArea list={filteredList} />

      </div>

    </div>
  );
}
