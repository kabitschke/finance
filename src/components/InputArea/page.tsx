import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Item } from '@/types/Item';
import styles from './page.module.css';
import { schema } from '@/components/schema';
import { z } from "zod";

type Props = {
    onAdd: (item: Item) => void;
}


export const InputArea = ({ onAdd }: Props) => {

    type FormData = z.infer<typeof schema>;
    const form = useForm({
        resolver: zodResolver(schema)
    });

    const { register, handleSubmit, formState: { errors } } = form;

    const onSubmit = (data: FormData) => {

        let newList: Item = {
            date: new Date(data.date),
            category: data.category,
            title: data.title,
            value: data.value
        }
        onAdd(newList);
    };




    return (
        <div className={styles.container}>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="date" {...register("date")} />
                {errors.date && <p>{errors.date.message}</p>}

                <select {...register("category")}>
                    <option value="">Selecione</option>
                    <option value="food">Alimentação</option>
                    <option value="rent">Aluguel</option>
                    <option value="salary">Salário</option>
                </select>
                {errors.category && <p>{errors.category.message}</p>}

                <input type="text" {...register("title")} />
                {errors.title && <p>{errors.title.message}</p>}

                <input type="text" {...register("value")} />
                {errors.value && <p>{errors.value.message}</p>}

                <button type="submit">Adicionar</button>

            </form>

        </div>
    );
}