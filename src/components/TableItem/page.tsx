import styles from './page.module.css';
import { formatDate } from '@/helpers/dateFilter';
import { categories } from '@/data/categories';

import { Item } from '@/types/Item';




type Props = {
  item: Item;
}

export const TableItem = ({ item }: Props) => {

  const CategoryIcon = categories[item.category].icon;





  return (

    <tr className={styles.line}>
      <td className={styles.column}>{formatDate(item.date)}</td>
      <td className={styles.column}>
        <div className={styles.category} style={{ backgroundColor: `${categories[item.category].color}` }}>
          <div
            className={styles.category}
            style={{ backgroundColor: categories[item.category].color }}
          >
            <CategoryIcon size={14} />
            {categories[item.category].title}
          </div>
        </div>
      </td>
      <td className={styles.column}>{item.title}</td>
      <td className={styles.column}>
        <div style={{ color: `${categories[item.category].expensive ? '#FA5660' : '#4AC56E'}` }}>
          {item.value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </div>
      </td>
    </tr>
  );
}