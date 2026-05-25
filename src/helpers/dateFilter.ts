import { Item } from "@/types/Item";

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export const filterListByMonth = (list: Item[], date: string): Item[]/*Retorno item[]*/ => {
    let newList: Item[] = [];

    // let dateSplit = date.split('-'); 
    // let year = dateSplit[0];
    // let month = dateSplit[1];

    let [year, month] = date.split('-'); /**destructuring Simplificado*/

    for (let i in list) {
        if (
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i]);
        }
    }


    return newList;
}

export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
}

export const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-');
    /**currentMonth possui Date aqui ocorre desestruturação */
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    /**Cria array com meses em português */
    return `${months[parseInt(month) - 1]} de ${year}`;
    /** month tem mês em string ex 05 parseInt fica 5 vira number e acessa o índice do array -1 porque a contagem inicia do zero */
}

export const formatCurrencyBrl = (value: number) => {
    const displayValue = value < 0
        ? `R$ -${Math.abs(value).toLocaleString('pt-BR')}`
        : value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

    return displayValue;
}
