import { Item } from '@/types/Item';
import styles from './page.module.css';
import { TableItem } from '../TableItem/page';
import { Home, List } from 'lucide-react';

type Props = {
  list: Item[]
}
export const TableArea = ({ list }: Props) => {



  return (
    <div className={styles.tableContainer}>

      <div className={styles.lancamentosArea}>
        <div className={styles.icon}><List size={14} /></div>
        <h3>Lançamentos</h3>
      </div>
      <div className={styles.containerTable}>


        <table>
          <thead>
            <tr>
              <th style={{ width: 100 }}>Data</th>
              <th style={{ width: 130 }}>Categoria</th>
              <th>Título</th>
              <th style={{ width: 150 }}>Valor</th>

            </tr>
          </thead>

          <tbody>
            {
              list.map((item, index) =>
                <TableItem key={index} item={item} />

              )
            }

          </tbody>
        </table>
      </div>

    </div>
  );
}