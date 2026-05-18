import { Item } from "@/types/Item";

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

// export const getCurrentMonth = () => {
//     let now = new Date();
//     let year = now.getFullYear();
//     let month = now.getMonth() + 1;

//     return `${year}-${month.toString().padStart(2, '0')}`;
// };

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