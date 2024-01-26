import Layout from '~/components/Layout'
import TaxCalculator from '~/components/TaxCalculator'
import CreditCalculator from '~/components/CreditCalculator'

export default function Index() {
  return (
    <Layout defaultTitle='All calculators'>
      <TaxCalculator />
      <CreditCalculator />
    </Layout>
  )
}
