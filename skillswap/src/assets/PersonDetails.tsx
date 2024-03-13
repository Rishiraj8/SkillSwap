import React from 'react';

type PersonDetailsProps = {
    name: string;
    rating: number;
    experience: number;
    skills: string[];
};

export default function PersonDetails({ name, rating, experience, skills }: PersonDetailsProps) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Rating: {rating}</p>
            <p>Experience: {experience}</p>
            <p>Skills: {skills.join(', ')}</p>
        </div>
    );
}
