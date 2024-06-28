import React from 'react';

const SelectInput = ({ id, className, options, value, onChange }) => {
    return (
        <select
            id={id}
            className={className}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            {options.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    );
};

export default SelectInput;
