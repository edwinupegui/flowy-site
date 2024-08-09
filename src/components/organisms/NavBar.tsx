import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Tab, Tabs } from '@nextui-org/react'
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'

import { SelectedPage } from '@/constants/SelectedPage'
import { useStoreNavigation } from '@/store/Navigation.state'
import useMediaQuery from '@/hooks/useMediaQuery'

const NavBar = () => {
  const navigation = useStoreNavigation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isAboveMediumScreens = useMediaQuery('(min-width: 768px)')

  const handleSelectionChange = (key: string | number) => {
    navigation.setSelectedPage(key as SelectedPage)
  }

  const renderTabs = () => {
    const tabs = [
      { title: 'Inicio', page: SelectedPage.Home },
      { title: 'Únete a Flowy', page: SelectedPage.JoinUp },
      { title: 'Servicios', page: SelectedPage.Services },
      { title: 'FAQ’s', page: SelectedPage.Faq },
      { title: 'Ingresar', page: SelectedPage.GetInto },
    ]

    return tabs.map(({ title, page }) => (
      <Tab key={page} title={title} className="relative my-1 px-5 font-bold" />
    ))
  }

  useEffect(() => {
    if (navigation.selectedPage) {
      document
        .getElementById(navigation.selectedPage)
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [navigation.selectedPage])

  const renderMenuItems = () => {
    const pages = [
      SelectedPage.Home,
      SelectedPage.JoinUp,
      SelectedPage.Services,
      SelectedPage.Faq,
      SelectedPage.GetInto,
    ]

    return pages.map((page) => (
      <NavbarMenuItem key={page}>
        <NavbarMenuToggle
          onClick={() => navigation.setSelectedPage(page)}
          icon={<p>{page}</p>}
        />
      </NavbarMenuItem>
    ))
  }

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      position="sticky"
      maxWidth="full"
      className="gradient-nav-bar bg-[#192843] md:px-20 py-2"
    >
      <NavbarContent>
        <NavbarBrand>
          <Image
            priority
            src="/images/Logo.svg"
            alt="Logo Flowy"
            height={isAboveMediumScreens ? 150 : 75}
            width={isAboveMediumScreens ? 150 : 75}
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="end">
        <Tabs
          radius="full"
          color="primary"
          selectedKey={navigation.selectedPage}
          onSelectionChange={handleSelectionChange}
          variant="light"
        >
          {renderTabs()}
        </Tabs>
      </NavbarContent>
      <NavbarMenuToggle
        icon={
          <div className="bg-primary rounded-lg w-[45px] h-[45px] p-2 flex flex-col gap-1.5 justify-center items-center">
            <div className="w-7 bg-white h-1 rounded-full" />
            <div className="w-7 bg-white h-1 rounded-full" />
            <div className="w-7 bg-white h-1 rounded-full" />
          </div>
        }
        className="sm:hidden"
      />
      <NavbarMenu className="flex flex-col items-center justify-start mt-5 gap-4 no-scrollbar bg-primary">
        {renderMenuItems()}
      </NavbarMenu>
    </Navbar>
  )
}

export default NavBar
