import classes from "@core/components/pageLayout/pageLayout.module.scss"

interface  PageLayoutProps {
    children: React.ReactNode
    extraClass?: string
}

export default function PageLayout({ children, ...props }: PageLayoutProps) {
    const className = props.extraClass ? `${props.extraClass} ${classes.root}` : classes.root
    console.log(className)
    return (
        <div className={className} {...props}>
            {children}
        </div>
    )
}