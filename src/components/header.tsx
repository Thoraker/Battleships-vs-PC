import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import Container from "./container";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const routes = [
    {
        "to": "/",
        "label": "Inicio"
    },
    {
        "to": "/rules",
        "label": "Rules"
    },
    {
        "to": "/game",
        "label": "Game"
    }
]

function Header(): JSX.Element {
    return (
        <header className="sm:flex sm:justify-between py-3 px-4 bg-slate-400 dark:dark:bg-slate-950">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
                    <div className="flex items-center" id="header-logo">
                        <Sheet>
                            <SheetTrigger>
                                <Menu className="h-6 w-6 md:hidden" />
                            </SheetTrigger>
                            <SheetContent side="left" className="w-80 sm:w-96 bg-white dark:bg-black  dark:text-white">
                                <SheetHeader className="mb-12">
                                    <SheetTitle>Battleships Game</SheetTitle>
                                    <SheetDescription>
                                    </SheetDescription>
                                </SheetHeader>
                                <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
                                    {routes.map((route, index) => (
                                        <Button asChild variant="ghost" key={index}>
                                            <Link to={route.to} className="block px-2 py-1 text-lg">
                                                {route.label}
                                            </Link>
                                        </Button>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                        <Link to="/" className="ml-4 lg:ml-0">
                            <h1 className="text-xl font-bold">
                                <img
                                    src="src/assets/battleshipcycles-logo.png"
                                    alt="Logo Battlehips"
                                    className="w-24 rounded-lg"
                                />
                            </h1>
                        </Link>
                    </div>
                    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
                        {routes.map((route, index) => (
                            <Button asChild variant="ghost" key={index}>
                                <Link to={route.to} className="block px-2 py-1 text-lg">
                                    {route.label}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                    <div>
                        <ModeToggle />
                    </div>
                </div>

            </Container>
        </header>
    );
}

export default Header;