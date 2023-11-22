import Link from "next/link";
//Homepage
export default function Home() {
  return (
    <main>
      <h2>Your Dashboard</h2>
      <p className="card">Welcome to our bartender closing checklist web app, the ultimate tool to ensure every detail is covered before closing time. Designed with efficiency in mind, our app empowers bartenders to seamlessly navigate through a comprehensive list of tasks, guaranteeing that each duty is completed with precision. From inventory checks to cleanliness standards, our user-friendly interface provides a streamlined experience for checking all tasks are completed.
      </p>
      <div>
        {/*"Link" component*/}
        <Link href="/list">
          <button className="btn-primary">View Checklist</button>
        </Link>
      </div>
    </main>
  )
}
