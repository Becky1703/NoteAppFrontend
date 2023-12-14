import { Button, Card, CardBody, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import "./style.css"
export default function NoteCard({title, body, user, _id}){

    return <Card className="card">
        <CardBody>
            <VStack>

               <Heading>{title}</Heading>
               <Text>{body}</Text>

                <Flex gap={2}>
                    <Button>Update</Button>
                    <Button>Delete</Button>
                </Flex>

            </VStack>
        </CardBody>
    </Card>
}