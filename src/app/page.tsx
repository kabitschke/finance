'use client'
import styles from "./page.module.css";
import { useEffect, useState } from 'react';
import { Item } from '@/types/Item';
import { items } from '@/data/items';
import { Category } from '@/types/Category';
import { categories } from "@/data/categories";
import { getCurrentMonth } from "@/helpers/dateFilter";



export default function Home() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {

  }, [list, currentMonth]);



  return (
    <div className={styles.container}>

      <div className={styles.header}>

        <h1 className={styles.title}>Sistema Financeiro</h1>

      </div>

      <div className={styles.body}>
        {/* Área de informações */}

        {/* Área de inserção  */}

        {/* Tabela de itens */}

      </div>

    </div>
  );
}
