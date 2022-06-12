import { IPersons } from '../config';

export const api = (person: IPersons): Promise<number> => {
    return new Promise((resolve, reject) => {
        const delay: number = Math.floor(Math.random() * 500) + 500;
        try {
            setTimeout(() => {
                resolve(delay);
            }, delay);
        } catch (error) {
            console.error(error);
            reject();
        }
    });
}
