import Container from "@/components/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function RulesPage(): JSX.Element {
  return (
    <>
      <Container>
        <Card className="mt-24">
          <CardHeader>
            <CardTitle>Battleships Game Rules</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                Battleship puzzles, which became popular since 1992, are a
                single player version of the game many of us used to enjoy as
                children. Using pure logic and requiring no math to solve, these
                addictive puzzles offer endless fun and intellectual
                entertainment to puzzle fans of all skills and ages.
              </li>
              <li>
                A typical Battleship puzzle consists of a 10x10 grid containing
                a hidden fleet of ten known ships. The only information is
                numbers telling how many ship segments are in each row and
                column, and some given ship segments in various places in the
                grid. The object is to discover where all ten ships are located
                in the grid.
              </li>
              <li>
                Concepts Battleships are easy to learn logic puzzles that come
                in several grid sizes and offer endless solving variations,
                ranging from very easy to extremely difficult and taking
                anything from five minutes to several hours to solve.
              </li>
              <li>
                If you like Sudoku, Kakuro and other logic puzzles, you will
                love Concepts Battleships as well!
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </Container>
    </>
  );
}

export default RulesPage;
