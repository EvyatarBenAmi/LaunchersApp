import React from 'react'

export default function FilterLaunchers() {
    return (
        <div>
            <label htmlFor="labelFilter">Filter by launcher type:</label>
            
            <select name="filterLaunchers" id="filterType">
                <option value="Shahab3">Shahab3</option>
                <option value="Fetah110">Fetah110</option>
                <option value="Radwan">Radwan</option>
                <option value="Kheibar">Kheibar</option>
            </select>
        </div>
    )
}
