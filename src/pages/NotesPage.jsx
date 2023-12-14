import { useDispatch } from 'react-redux';
import { Box, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NoteCard from '../components/NotesPage/NoteCard/NoteCard';
import { getNotes } from '../Redux/notes/note.actions';

export default function NotesPage() {
    const dispatch = useDispatch()
    const {message, loading, error, data} = useSelector((state) => state.noteReducer)
    console.log(data)
    const [notes, setNotes] = useState([])
    
    useEffect(() => {
       dispatch(getNotes());
    

    }, []);

    useEffect(() => {

        setNotes(data);
    

    }, [data]);

    console.log(loading, error)

    return <Box mt={20} padding={8} >

        <Grid gap={10} w={"90%"} margin={"auto"} gridTemplateColumns="repeat(4, 1fr)">

            {notes?.map((el) => <NoteCard {...el}/>)}

        </Grid>

    </Box>
}