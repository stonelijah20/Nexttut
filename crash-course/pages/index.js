import Users from "../components/Users"

export default function Home({users}) {
  return (
    <div>
      <Users users={users}/>
      
    </div>
  )
}

export const getStaticProps = async () => {
  const res  = await fetch (`https://jsonplaceholder.typicode.com/users`)
  const users = await res.json() 

  return {
    props: {
      users
    }
  }
}
