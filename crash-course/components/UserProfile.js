import Link from 'next/link'
function UserProfile({user}) {
  return (
    <>
        <div>
            <Link href="/user/[id]" as={`/user/${user.id}`}>
                <h3><a>{user.name}</a></h3>
            </Link>
        </div>
    </>
  )
}

export default UserProfile