import { MdDeleteForever } from 'react-icons/md';
const Note = ({ id,text,date,handleDeleteNote,handleUpdate}) => {
    return (
        <div className='note'>
            <span> {text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <button onClick={()=>handleUpdate(text)} className='save'>update</button>
                <MdDeleteForever onClick={()=>handleDeleteNote(id)}className='delete-icon' size='1.3em' />
            </div>
        </div>
    );
};
export default Note;