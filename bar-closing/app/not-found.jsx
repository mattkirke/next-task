import Link from "next/link";

export default function PageNotFound(){
    return(
        <main>
            <h2>Unfortunetly there was a problem!!</h2>
            <p>Had back to <Link href="/">safety</Link></p>
        </main>
    )
}