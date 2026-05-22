import { Item } from '@/types/Item';
import styles from './page.module.css';
import { formatDate } from '@/helpers/dateFilter';
import { categories } from '@/data/categories';

type Props = {
  item: Item;
}

export const TableItem = ({ item }: Props) => {

  return (

    <tr className={styles.line}>
      <td className={styles.column}>{formatDate(item.date)}</td>
      <td className={styles.column}>
        <div className={styles.category} style={{ backgroundColor: `${categories[item.category].color}` }}>
          {categories[item.category].title}
        </div>
      </td>
      <td className={styles.column}>{item.title}</td>
      <td className={styles.column}>
        <div style={{ color: `${categories[item.category].expensive ? 'red' : 'green'}` }}>
          {item.value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </div>
      </td>
    </tr>
  );
}