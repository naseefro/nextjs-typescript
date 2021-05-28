import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Anime } from '../../interfaces'
// import List from '../../components/List'
// import httpApi from '../../apis/httpApi'
import { getAnimes } from '../../apis/animeServices'
import List from '../../components/List'

type Props = {
  items: Anime[]
}

const WithStaticProps = ({ items }: Props) => (
  <>
    <h1>Anime List</h1>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  let items: null | Anime[];
  const response = await getAnimes();
  if (response.success) {
    items = response?.data?.data;
  } else {
    return { redirect: { destination: "/404", }, props: {} }
  }
  return { props: { items } }
}

export default WithStaticProps
