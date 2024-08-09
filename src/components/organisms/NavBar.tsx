import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Tab, Tabs } from '@nextui-org/react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'

import useMediaQuery from '@/hooks/useMediaQuery'

import { SelectedPage } from '@/constants/SelectedPage'
import { useStoreNavigation } from '@/store/Navigation.state'

const NavBar = () => {
  const navigation = useStoreNavigation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isAboveMediumScreens = useMediaQuery('(min-width: 768px)')

  const handleSelectionChange = (key: string | number) => {
    navigation.setSelectedPage(key as SelectedPage)
  }
  // eslint-disable-next-line no-console
  console.log(isMenuOpen)
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
      className="gradient-nav-bar bg-[#192843] py-2 md:px-20"
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
          <div className="flex size-[45px] flex-col items-center justify-center gap-1.5 rounded-lg bg-primary p-2">
            <div className="h-1 w-7 rounded-full bg-white" />
            <div className="h-1 w-7 rounded-full bg-white" />
            <div className="h-1 w-7 rounded-full bg-white" />
          </div>
        }
        className="sm:hidden"
      />
      <NavbarMenu className="no-scrollbar mt-5 flex flex-col items-center justify-start gap-4 bg-primary">
        {renderMenuItems()}
      </NavbarMenu>
    </Navbar>
  )
}

export default NavBar
