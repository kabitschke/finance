import { Item } from '@/types/Item';
import styles from './page.module.css';

type Props = {
  item: Item;
}

export const TableItem = ({ item }: Props) => {

  return (

    <tr className={styles.line}>
      <td className={styles.column}>...</td>
      <td className={styles.column}>{item.category}</td>
      <td className={styles.column}>{item.title}</td>
      <td className={styles.column}>R$ {item.value}</td>
    </tr>


  );
}