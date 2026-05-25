import { LucideIcon } from "lucide-react";

export type Category = {
    [tag: string]: {
        title: string;
        color: string;
        expensive: boolean;
        icon: LucideIcon
    }

}