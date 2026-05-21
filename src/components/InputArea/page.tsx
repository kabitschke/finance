import { Item } from '@/types/Item';
import styles from './page.module.css';

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {

    const handleAddEvent = () => {
        let newList: Item = {
            date: new Date(2026, 4, 21),
            category: 'food',
            title: 'Item de teste',
            value: 250.25
        };

        onAdd(newList);
    }

    return (
        <div className={styles.container}>

            <button onClick={handleAddEvent}>Adicionar</button>
        </div>
    );
}