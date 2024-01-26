import Layout from '~/components/Layout'
import Expenses from '~/components/Expenses'

export default function Index() {
  return (
    <Layout defaultTitle='Welcome to Finappance'>
      <Expenses />
    </Layout>
  )
}
