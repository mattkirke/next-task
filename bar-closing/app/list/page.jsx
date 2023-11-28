import React, { Suspense } from 'react'
import List from './List'
import Loading from '../loading'
import Link from 'next/link'

export default function Lists(){
    return(
        <main>
            <nav>
                <div>
                    <h2>Tasks</h2>
                </div>
            </nav>
            <Link href="/list/create"><button className="btn-add">Add Task</button></Link>
            <Suspense fallback={<Loading />}>
                <List />
            </Suspense>
        </main>
    )
}