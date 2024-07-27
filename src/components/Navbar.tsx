import Options from "@/components/Options";

export default function Navbar() {

    return (
        <header className="w-full fixed">
            <nav className='container mx-auto py-6'>
                <div className="w-full flex justify-end">
                    <Options />
                </div>
            </nav>
        </header>        
    )
}