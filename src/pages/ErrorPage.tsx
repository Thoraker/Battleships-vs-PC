import Container from "@/components/container";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";

interface CustomError extends Error {
  statusText: string;
}

function ErrorPage() {
  const error = useRouteError() as CustomError;
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 10000);
  }, []);

  return (
    <>
      <Container>
        <Card className="mt-32 w-full text-center">
          <CardHeader>
            <CardTitle>Something went wrong</CardTitle>
            <CardDescription>Sorry for the inconvenience</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{error.statusText || error.message}</p>
          </CardContent>
          <CardFooter>
            <p>
              Just wait to be redirected to the home page or click{" "}
              <Link to="/" className=" text-blue-600 underline">
                here
              </Link>
            </p>
          </CardFooter>
        </Card>
      </Container>
    </>
  );
}

export default ErrorPage;
