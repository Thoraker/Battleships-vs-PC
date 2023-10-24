import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import Container from "@/components/container";

function HomePage() {
    return (
        <>
            <Container>
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </Container>
        </>
    );
}

export default HomePage;