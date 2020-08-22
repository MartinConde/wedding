import React, { useEffect } from "react"
import Slider from "../components/slider"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const SplitWrapper = styled.div`
  width: 100%;

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
    min-height: 100vh;
  }
`

const SliderWrapper = styled(motion.div)`
  padding-bottom: 90px;

  @media (min-width: 1200px) {
    height: 100vh;
    width: 50vw;
    position: fixed;
    top: 0;
    right: 0;
    padding-bottom: 0;
  }
`

const ContentWrapper = styled.div`
padding: 25px;

  @media (min-width: 1200px) {
    width: 50vw;
    padding: 150px 25px 25px 25px;
    div {
    max-width: 600px;
    margin: 0 auto;
  }
  }

  
`

const AnimatedTitle = styled(motion.h1)``

const AnimatedContent = styled(motion.div)``

const UnsereGeschichte = () => (
  <>
    <SEO title="Unsere Geschichte" />
    <SplitWrapper>
      <AnimatePresence>
        <ContentWrapper>
          <div>
            <AnimatedTitle
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ delay: 0.1, ease: "easeOut" }}
            >
              Die Geschichte unserer Liebe
            </AnimatedTitle>
            <AnimatedContent
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ delay: 0.1, ease: "easeOut" }}
            >
              <p>
                Wir haben uns vor ca. 12 Jahren durch Martin kennengelernt. Er
                war und ist unser bester Freund. Nachdem wir uns für ein paar
                Jahre aus den Augen verloren haben, fanden wir im Februar 2019
                wieder zueinander. Dann ging alles sehr schnell. Wir schrieben
                jeden Tag miteinander und freuten uns immer uns zu sehen.{" "}
              </p>
              <p>
                Nach mehreren Wochen des Hin und Herfahrens, der schlaflosen
                Nächten und gemeinsamen Wochenenden, gestanden wir uns unsere
                Liebe und gingen am 19.05.19 eine Fernbeziehung ein. Schnell
                stellten wir fest, dass wir endlich unseren Seelenverwandten
                gefunden hatten. Wir verbrachten die gemeinsame Zeit in der
                Sauna, im Spa, auf Teneriffa, in Köln, in Berlin, fuhren
                zusammen zum Helene Beach Festival, schliefen im Auto und
                genossen unser Leben in vollen Zügen.{" "}
              </p>
              <p>
                Im Juli 2019 waren wir gemeinsam in Wismar und beschlossen diese
                schöne Hafenstadt zu unserem neuen zu Hause zu machen. Max hatte
                zu dem Zeitpunkt bereits mehreren Freunden von dem Plan erzählt
                um meine Hand anzuhalten. Ich erfuhr dies erst nach einem
                atemberaubenden Abend, der bei einem romantischen Essen und
                einer aussergewöhnlich schönen Oper, in einem Antrag seinen
                Gipfel fand. Ganz klassisch mit Kniefall bat er mich seine Frau
                zu werden. Unter Freudentränen stimmte ich zu. Denn wir beide
                wussten, dass wir all die Jahre, schon die grosse Liebe kannten,
                sie nur noch nicht sahen.
              </p>
            </AnimatedContent>
          </div>
        </ContentWrapper>
      </AnimatePresence>
      <SliderWrapper layoutId="bg" transition={{ duration: 0.5 }}>
        <Slider />
      </SliderWrapper>
    </SplitWrapper>
  </>
)

export default UnsereGeschichte
