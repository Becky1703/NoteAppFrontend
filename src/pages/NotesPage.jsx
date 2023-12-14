import { useDispatch } from 'react-redux';
import { Box, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NoteCard from '../components/NotesPage/NoteCard/NoteCard';

export default function NotesPage() {
    
    const {loading, error, data} = useSelector((state) => state.notesReducer)
    const dispatch = useDispatch()
    console.log(data)
    const [notes, setNotes] = useState([])
    
    useEffect(() => {

        dispatch(getNotes())

    }, [])

    useEffect(() => {
        
        setNotes(data)
        console.log(data)

    }, [data])

    console.log(loading, error)
    
    return <Box>

        <Grid>

            {notes?.map((el)=><NoteCard {...el}/>)}

        </Grid>
        
    </Box>
}