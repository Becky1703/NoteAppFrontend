import { useDispatch } from 'react-redux';
import { Box, Grid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function NotesPage() {
    
    const {loading, error, data} = useSelector((state) => state.notesReducer)
    const dispatch = useDispatch()
    
    useEffect(() => {

        dispatch(getNotes())

    }, [])
    console.log(loading, error)
    
    return <Box>

        <Grid>

        </Grid>
        
    </Box>
}