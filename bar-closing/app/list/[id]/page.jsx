import { notFound } from "next/navigation"

export const dynamicParams = true

export async function genStaticParams(){

    const res = await fetch('http://localhost:3001/lists')
    const lists = await res.json()
    return lists.map((list) => ({
        id: list.id
    }))
}
/**
 * 
 * @param {*} id 
 * @returns 
 */
async function getList(id){
    await new Promise(resolve => setTimeout(resolve, 2000))
    const res = await fetch(`http://localhost:3001/lists/${id}`,{
        next: { 
            revalidate: 10
        }
    })
    if(!res.ok){
        notFound()
    }
    return res.json()
}
export default async function ListDetails({ params }){
    const list = await getList(params.id)
    return(
        <main>
            <nav>
                <div>
                    <h2>Tasks</h2>
                </div>
            </nav>
            <div className="card">
                <div>
                    <h3>{list.title}</h3>
                    <p>{list.body}</p>
                </div>
                <div className={`pill ${list.priority}`}>
                    {list.priority} priority
                </div>
            </div>
        </main>
    )
}