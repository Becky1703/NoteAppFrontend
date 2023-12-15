import { useDispatch } from "react-redux";
import { Box, Button, Grid, IconButton, Input, Textarea, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import NoteCard from "../components/NotesPage/NoteCard/NoteCard";
import { createNotes, getNotes } from "../Redux/notes/note.actions";
import { IoIosAddCircle } from "react-icons/io";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";

export default function NotesPage() {
    const dispatch = useDispatch();
    const { message, loading, error, data } = useSelector(
        (state) => state.noteReducer
    );
    console.log(data);
    const [notes, setNotes] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    useEffect(() => {
        dispatch(getNotes());
    }, []);

    useEffect(() => {
        setNotes(data);
    }, [data]);

    const createNote = () => {
        dispatch(createNotes({title, body}))
        onClose()
    }

    return (
        <Box mt={20} padding={8}>
            <Grid
                gap={10}
                w={"90%"}
                margin={"auto"}
                gridTemplateColumns="repeat(4, 1fr)"
            >
                {notes?.map((el) => (
                    <NoteCard {...el} />
                ))}
            </Grid>

            <IconButton
                boxShadow={"box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                position={"fixed"}
                w={50}
                h={20}
                borderRadius={50}
                bg={"teal"}
                bottom={0}
                right={0}
                margin={16}
                onClick= {onOpen} 
                icon={<IoIosAddCircle />}
            ></IconButton>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create a new note</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        
                        <Input value={title} placeholder="Please enter a title" onChange={(e) => setTitle(e.target.value)}></Input>
                        <Textarea mt={8} value={body} placeholder={"please type your note"} onChange={(e) => setBody(e.target.value)}></Textarea>
                    
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="teal" mr={3} onClick={createNote}>
                            Create
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}
