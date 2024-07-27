import Link from "next/link"

export default function CommingSoon() {
    return (
        <section className="flex flex-col justify-center items-center text-4xl gap-2">
            Coming Soon!!
            <Link href="/" className="text-sm flex justify-center items-center gap-2 underline opacity-70">
                back to home page
            </Link>
        </section>
    )
}

