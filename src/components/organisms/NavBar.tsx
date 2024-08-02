import { useEffect } from 'react'
import Image from 'next/image'

import { Tab, Tabs } from '@nextui-org/react'

// import useMediaQuery from '@/hooks/useMediaQuery'
import { SelectedPage } from '@/constants/SelectedPage'
import { useStoreNavigation } from '@/store/Navigation.state'

const Navbar = () => {
  const navigation = useStoreNavigation()
  // const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

  const handleSelectionChange = (key: string | number) => {
    navigation.setSelectedPage(key as SelectedPage)
  }

  const renderTab = (title: string, page: SelectedPage) => (
    <Tab
      key={page}
      title={title}
      className="relative my-1 px-4 first:ml-4 last:mr-5"
    />
  )

  useEffect(() => {
    if (navigation.selectedPage) {
      document
        .querySelector(`#${navigation.selectedPage}`)
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [navigation.selectedPage])

  return (
    <section className="sticky top-0 z-10 bg-gradient-to-l from-[#6FE3C5] via-[#573BD5] to-[#20183F] px-20 py-5">
      <nav className="flex items-start justify-between">
        <Image
          priority
          src="/images/Logo.svg"
          alt="Logo Flowy"
          height={150}
          width={150}
        />
        <Tabs
          radius="full"
          color="primary"
          selectedKey={navigation.selectedPage}
          onSelectionChange={handleSelectionChange}
        >
          {renderTab('Inicio', SelectedPage.Home)}
          {renderTab('Conócenos', SelectedPage.KnowUs)}
          {renderTab('Servicios', SelectedPage.Services)}
          {renderTab('Únete', SelectedPage.ContactUs)}
          {renderTab('Ingresar', SelectedPage.GetInto)}
        </Tabs>
      </nav>
    </section>
  )
}

export default Navbar
