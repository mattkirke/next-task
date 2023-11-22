import Link from "next/link";

export default function PageNotFound(){
    return(
        <main className="text-center">
            <h2>Unfortunetly there was a problem!</h2>
            <p>Had back to <Link href="/list">your checklist</Link></p>
        </main>
    )
}