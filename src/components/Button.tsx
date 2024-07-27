export default function Button({ icon, content, className} : {
    icon: React.ReactNode,
    content: string,
    className: string
}) {
    return (
        <button className={`${className} flex items-center justify-center gap-2 text-white`}>
            {icon}
            <span>{content}</span>
        </button>
    )   
}