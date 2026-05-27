import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Item } from '@/types/Item';
import styles from './page.module.css';
import { schema } from '@/components/schema';
import { z } from "zod";
import { Plus } from "lucide-react";
import { useState } from "react";

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

        // const valorParcela = data.month
        //     ? data.value / data.month
        //     : data.value;

        let newList: Item = {
            date: new Date(data.date),
            category: data.category,
            title: data.title,
            value: data.value,
            month: data.month
        }

        onAdd(newList);
    };




    return (
        <div className={styles.container}>

            <div className={styles.addArea}>
                <div className={styles.icone}><Plus strokeWidth={2.5} size={14} /></div>
                <h3>Adicionar Transação</h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.formulario}>

                <div className={styles.message}>
                    <input type="date" {...register("date")} className={`${styles.input} ${errors.date ? styles.error : ""}`} />
                    {errors.date && <p>{errors.date.message}</p>}
                </div>

                <div>
                    <select {...register("category")} className={`${styles.select} ${errors.category ? styles.error : ""}`}>
                        <option value="">Selecione</option>
                        <option value="food">Alimentação</option>
                        <option value="rent">Aluguel</option>
                        <option value="salary">Salário</option>
                    </select>
                    {errors.category && <p>{errors.category.message}</p>}
                </div>

                <div>
                    <select {...register("month")} className={`${styles.select} ${errors.month ? styles.error : ""}`}>
                        <option value="">Parcelas</option>
                        {[...Array(12)].map((_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>

                        ))}
                    </select>
                    {errors.month && <p>{errors.month.message}</p>}
                </div>




                <div>
                    <input type="text" {...register("title")} className={`${styles.input} ${errors.title ? styles.error : ""}`} placeholder="Título" />
                    {errors.title && <p>{errors.title.message}</p>}

                </div>

                <div>
                    <input type="text" {...register("value")} className={`${styles.input} ${errors.value ? styles.error : ""}`} placeholder="R$" />
                    {errors.value && <p>{errors.value.message}</p>}

                </div>

                <div>

                    <button type="submit"><div className={styles.btnIcon}><Plus size={14} /></div>Adicionar</button>
                </div>

            </form>

        </div>
    );
}