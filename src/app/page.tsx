'use client'

import { useEffect, useRef } from 'react'

import NavBar from '@/components/organisms/NavBar'

import { SelectedPage } from '@/constants/SelectedPage'
import { useStoreNavigation } from '@/store/Navigation.state'
import MainSection from '@/components/organisms/MainSection'

export default function Home() {
  const navigation = useStoreNavigation()

  const homeRef = useRef(null)
  const knowUsRef = useRef(null)
  const servicesRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        navigation.setIsTopOfPage(true)
        navigation.setSelectedPage(SelectedPage.Home)
      } else {
        navigation.setIsTopOfPage(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            switch (entry.target.id) {
              case SelectedPage.Home:
                navigation.setSelectedPage(SelectedPage.Home)
                break
              case SelectedPage.JoinUp:
                navigation.setSelectedPage(SelectedPage.JoinUp)
                break
              case SelectedPage.Services:
                navigation.setSelectedPage(SelectedPage.Services)
                break
              default:
                break
            }
          }
        })
      },
      {
        threshold: 0.6, // Adjust this value as needed
      },
    )

    if (homeRef.current) observer.observe(homeRef.current)
    if (knowUsRef.current) observer.observe(knowUsRef.current)
    if (servicesRef.current) observer.observe(servicesRef.current)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (homeRef.current) observer.unobserve(homeRef.current)
      if (knowUsRef.current) observer.unobserve(knowUsRef.current)
      if (servicesRef.current) observer.unobserve(servicesRef.current)
    }
  }, [])

  return (
    <main>
      <NavBar />
      <MainSection homeRef={homeRef} />
      <section
        id={SelectedPage.JoinUp}
        ref={knowUsRef}
        className="flex w-full flex-col px-10 py-5"
      >
        <div className="ml-10 mt-48 flex justify-start">
          <h2 className="text-8xl font-bold text-white">
            Simplifica tu <br /> vida, mejora <br /> tu futuro
          </h2>
        </div>
      </section>
      <section
        id={SelectedPage.Services}
        ref={servicesRef}
        className="flex w-full flex-col px-10 py-5"
      >
        <div className="ml-10 mt-48 flex justify-start">
          <h2 className="text-8xl font-bold text-white">
            Simplifica tu <br /> vida, mejora <br /> tu futuro
          </h2>
        </div>
      </section>
    </main>
  )
}
