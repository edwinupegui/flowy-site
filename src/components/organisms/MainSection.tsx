import { motion } from 'framer-motion'
import Image from 'next/image'

import { Button } from '@nextui-org/react'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useStoreNavigation } from '@/store/Navigation.state'
import { SelectedPage } from '@/constants/SelectedPage'

interface IMainSection {
  homeRef: React.RefObject<HTMLDivElement>
}

const MainSection = ({ homeRef }: IMainSection) => {
  const navigation = useStoreNavigation()
  const isAboveMediumScreens = useMediaQuery('(min-width: 768px)')
  return (
    <section
      id={SelectedPage.Home}
      ref={homeRef}
      className="gradient-main h-screen flex w-full flex-col bg-[#192843]"
    >
      <motion.div
        className="relative flex flex-col md:flex-row justify-between gap-20 md:gap-0 md:pl-28 md:pr-56 md:pt-48"
        onViewportEnter={() => navigation.setSelectedPage(SelectedPage.Home)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mt-28 md:mt-20 flex flex-col items-center md:items-start"
        >
          <h2 className="gradient-text text-4xl text-center md:text-left lg:text-[5rem] font-semibold leading-tight text-white">
            Simplifica tu vida, <br /> mejora tu futuro
          </h2>
          <Button
            color="primary"
            radius="full"
            className="mt-10 px-10 text-lg font-bold max-w-52"
          >
            Únete a Flowy
          </Button>
        </motion.div>
        <div className="relative">
          <div className="relative md:bottom-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Image
                priority
                src="/images/puntos.svg"
                alt="phone"
                height={isAboveMediumScreens ? 600 : 200}
                width={isAboveMediumScreens ? 1000 : 400}
                className="points-color absolute -right-20 bg-transparent"
              />
            </motion.div>
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image
                priority
                src="/images/joven-sonrienda-hd.png"
                alt="phone"
                height={isAboveMediumScreens ? 600 : 300}
                width={isAboveMediumScreens ? 600 : 300}
                className="img-bottom"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Image
                priority
                src="/images/Subtract.svg"
                alt="phone"
                height={isAboveMediumScreens ? 700 : 400}
                width={isAboveMediumScreens ? 700 : 400}
                className="relative bottom-7 md:bottom-10 right-10 "
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default MainSection
