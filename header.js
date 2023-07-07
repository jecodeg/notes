import React from 'react';
const header=({handleToggleDarkMode})=>{
    return(
            <div className="header">
                <h1>Notes</h1>
                <button onClick={()=>handleToggleDarkMode((previousDarkMode)=> !previousDarkMode)} className='save'>
                    Switch Theme
                </button>
            </div>

    )
}
export default header;