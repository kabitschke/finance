import { Category } from "@/types/Category";
import { UtensilsCrossed, Home, DollarSign } from 'lucide-react';

export const categories: Category = {
    food: { title: 'Alimentação', color: '#012d8c', expensive: true, icon: UtensilsCrossed },
    rent: { title: 'Aluguel', color: '#803805', expensive: true, icon: Home },
    salary: { title: 'Salário', color: '#235e1c', expensive: false, icon: DollarSign }
}