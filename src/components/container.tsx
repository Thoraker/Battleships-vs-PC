import { ContainerProps } from "@/assets/interfaces";

function Container({ children, ...props }: ContainerProps): JSX.Element {
  return (
    <>
      <div className="flex grow mx-auto w-full max-w-7xl" {...props}>
        {children}
      </div>
    </>
  );
}

export default Container;
