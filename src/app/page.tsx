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
import { InputArea } from "@/components/InputArea/page";



export default function Home() {
  const [list, setList] = useState(items);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));

  }, [list, currentMonth]);


  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expensive) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    /**Quando o mês trocar */
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);

    console.log('New List', list);
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

        <InputArea onAdd={handleAddItem} />



        <TableArea list={filteredList} />

      </div>

    </div>
  );
}
