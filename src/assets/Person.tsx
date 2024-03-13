import React, { useState } from 'react';
import PersonDetails from './PersonDetails';
import Nav from '../components/header/Nav';

type PersonDetails = {
    name: string;
    skills: string[];
    rating: number;
    experience: number;
    reviews: string[];
};

const skillsOptions = ["React", "Node", "MongoDB", "Angular", "Express", "MySQL", "Vue", "Django", "PostgreSQL"];

export default function Person() {
   

    const [selectedSkill, setSelectedSkill] = useState('');
    const [searchPerson, setSearchPerson] = useState('');

    const filterPerson = Persons.filter(person => {
            const skillMatch = selectedSkill ? person.skills.includes(selectedSkill) : true;
            const nameMatch = searchPerson ? person.name.toLowerCase().includes(searchPerson.toLowerCase()) : true;
            return skillMatch && nameMatch;
        });

    return (
        <>
           <Nav/>
            <div>
                <h2>Person Details</h2>
                <div>
                    <label htmlFor="skillSelect">Select a Skill:</label>
                    <select id="skillSelect" value={selectedSkill} onChange={event => setSelectedSkill(event.target.value)}>
                        <option value="">All</option>
                        {skillsOptions.map(skill => (
                            <option key={skill} value={skill}>{skill}</option>
                        ))}
                    </select>
                </div>
                <input type="text" placeholder="Enter the required names" onChange={event => setSearchPerson(event.target.value)} />
                <div>
                    {filterPerson.map((person, index) => (
                        <div key={index}>
                            <PersonDetails
                                name={person.name}
                                rating={person.rating}
                                experience={person.experience}
                                skills={person.skills} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
