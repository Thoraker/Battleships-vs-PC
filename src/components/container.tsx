type ContainerProps = {
    children: React.ReactNode;
    props?: React.HTMLAttributes<HTMLDivElement>;
  }

function Container({ children, ...props }: ContainerProps) {
    return(
        <>
            <div className="flex mx-auto w-full max-w-7xl" {...props}>
                {children}
            </div>
        </>
    )
}

export default Container