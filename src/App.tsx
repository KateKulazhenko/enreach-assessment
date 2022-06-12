import React, {useState, useEffect} from 'react';
import './App.css';

import data from './persons.json';
import { api } from './api';
import { IPersons } from './config';

function App() {
    const [persons, setPersons] = useState<IPersons[]>([]);

    useEffect(() => {
        // filter data and keep person with age 34 or older and mapping with extra key value
        const filteredPersons = data.filter((persone: {name: string; age: number}) => persone.age >= 34)
        .map((person: {name: string; age: number}) => {
            const fullName = person.name.split(' ');
            return {...person, firstName: fullName[0], lastName: fullName[1]} 
        });
        // make API call
        const fetchAPI = () => {
            // fetch data with salary amount
            const getDataWithIncome = filteredPersons.map(async (person: IPersons) => {
                const incomeAmount = await api(person);
                return {...person, income: incomeAmount};
            });

            // resolve all promises and count the total amount of salary
            Promise.all(getDataWithIncome).then((data: IPersons[]) => {
                const calculateSalaryAmount = data.reduce((acc, current) => acc + current.income!, 0);

                console.log(`Total average income of all persons: ${calculateSalaryAmount / getDataWithIncome.length}`);
                setPersons(data);
            });
        };

        fetchAPI();
    }, []);

    return (
        <div className="App">
            {persons.length ? <div className='list'>
                {persons.map((person: IPersons, indx: number) => {
                    return(
                        <div key={`${person.income}_${indx}`} className='list-item'>
                            <dt>{person.lastName} {person.firstName}</dt>
                            <dd>income: {person.income}</dd>
                        </div>
                    )
                })}
            </div> 
            : <p>No data.</p>}
        </div>
    );
}

export default App;
