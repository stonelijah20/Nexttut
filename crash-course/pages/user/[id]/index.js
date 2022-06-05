import {useRouter} from 'next/router'

function index({user}) {
    //One way of doing the id thing is by using the router that comes with next js or by fetching
/*     const router = useRouter()
    const {id} = router.query */
  return (
    <>
        <div>
            <h1>{user.name} {user.id}</h1>
            <h3>{user.city}{user.email}</h3>
        </div>
    </>
  )
}

export default index

//One way of delivering the blog per click shi

export const getServerSideProps = async(context) => {
    const res = await fetch (`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
    const user = await res.json()

    return {
        props: {
            user
        }
    }
}


//another way of doing it
/* export const getStaticPath = async() => {
    const res = await fetch (`https://jsonplaceholder.typicode.com/users/`)
    const users = await res.json()
    const ids = users.map(user => user.id)
    const path = ids.map(id => ({params: {id:id.toString()}}))
    return {
        path,
        fallback: false
    }
} */