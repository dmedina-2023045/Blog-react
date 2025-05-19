import React from 'react';
import { Link } from 'react-router-dom';

export const Filter = ({ activeFilter, onFilterChange }) => {
  const filterOptions = [
    'Todas',
    'Taller',
    'Tecnología',
    'Práctica Supervisada',
  ]

  return (
    <div className="filter-container">
      <h3 className="filter-title">Filtros:</h3>
      <div className="filter-buttons">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => onFilterChange(option)}
            className={`filter-button ${activeFilter === option ? 'filter-button--active' : ''}`}
          >
            {option}
          </button  >
        ))}
      </div>
    </div>
  )
}