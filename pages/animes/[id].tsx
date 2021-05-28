import { GetStaticProps, GetStaticPaths } from 'next'

import { Anime, User } from '../../interfaces'
import ListDetail from '../../components/ListDetail'
import { getAnimes } from '../../apis/animeServices'

type Props = {
  item?: User
  errors?: string
}

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <p>
        <span style={{ color: 'red' }}>Error:</span> {errors}
      </p>
    )
  }
  return (
    <>{item && <ListDetail item={item} />}</>
  )
}

export default StaticPropsDetail

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users

  let items = []
  const response = await getAnimes();
  if (response.success) {
    items = response?.data?.data;
  }
  const paths = items.map((user: any) => ({
    params: { id: user.id.toString() },
  }))
  console.log("paths", paths);

  // }

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    let item: any = null;
    const response = await getAnimes();
    if (response.success) {
      const items: Anime[] = response?.data?.data;
      item = items?.find(item => item.id.toString() === id)
      if (item) {
        return { props: { item: item } }
      } else {
        return { props: { errors: "Not found" } }
      }
    } else {
      return { props: { errors: "Not found" } }
    }

  } catch (err) {
    return { props: { errors: err.message } }
  }
}
