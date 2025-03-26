import HeroSection from "@/components/hero-section"
import AnimationWrapper from "@/components/animation-wrapper"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, ThumbsUp } from "lucide-react"
import { getDictionary } from "@/dictionaries"
import type { Locale } from "@/types"

export default async function WhoWeArePage({ params: { lang } }: { params: { lang: Locale } }) {
  const dict = await getDictionary(lang)
  const t = dict.aboutUs.whoWeAre

  return (
    <>
      <HeroSection
        title={dict.aboutUs.whoWeAre.hero.title}
        subtitle={dict.aboutUs.whoWeAre.hero.subtitle}
        backgroundImage="/images/about-hero.jpg"
        mobileBackgroundImage="/images/about-hero-mobile.jpg"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-lg mb-6">{dict.aboutUs.whoWeAre.intro.paragraph1}</p>
              <p className="text-lg mb-6">{dict.aboutUs.whoWeAre.intro.paragraph2}</p>
              <p className="text-lg mb-6">{dict.aboutUs.whoWeAre.intro.paragraph3}</p>
            </div>
          </AnimationWrapper>

          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.aboutUs.whoWeAre.guides.title}</h2>
              <p className="text-lg text-muted-foreground">{dict.aboutUs.whoWeAre.guides.subtitle}</p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimationWrapper delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-64 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/guide-mohammed.jpg" alt={t.guides.mohammed.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.guides.mohammed.name}</h3>
                <p className="mb-4">{t.guides.mohammed.description}</p>
                <p className="text-desert font-semibold">{t.guides.mohammed.specialties}</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-64 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/guide-ahmad.jpg" alt={t.guides.ahmad.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.guides.ahmad.name}</h3>
                <p className="mb-4">{t.guides.ahmad.description}</p>
                <p className="text-desert font-semibold">{t.guides.ahmad.specialties}</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-64 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/guide-salem.jpg" alt={t.guides.salem.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.guides.salem.name}</h3>
                <p className="mb-4">{t.guides.salem.description}</p>
                <p className="text-desert font-semibold">{t.guides.salem.specialties}</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-64 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/guide-hussein.jpg" alt={t.guides.hussein.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.guides.hussein.name}</h3>
                <p className="mb-4">{t.guides.hussein.description}</p>
                <p className="text-desert font-semibold">{t.guides.hussein.specialties}</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={500}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-64 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/guide-ali.jpg" alt={t.guides.ali.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.guides.ali.name}</h3>
                <p className="mb-4">{t.guides.ali.description}</p>
                <p className="text-desert font-semibold">{t.guides.ali.specialties}</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={600}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <div className="relative h-64 mb-4 rounded-md overflow-hidden">
                  <Image src="/images/guide-suleiman.jpg" alt={t.guides.suleiman.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.guides.suleiman.name}</h3>
                <p className="mb-4">{t.guides.suleiman.description}</p>
                <p className="text-desert font-semibold">{t.guides.suleiman.specialties}</p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-sand-light">
        <div className="container mx-auto px-4">
          <AnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.aboutUs.whoWeAre.values.title}</h2>
              <p className="text-lg text-muted-foreground">{dict.aboutUs.whoWeAre.values.subtitle}</p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimationWrapper delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Heart className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">{dict.aboutUs.whoWeAre.values.authentic.title}</h3>
                <p>{dict.aboutUs.whoWeAre.values.authentic.description}</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <Users className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">{dict.aboutUs.whoWeAre.values.community.title}</h3>
                <p>{dict.aboutUs.whoWeAre.values.community.description}</p>
              </div>
            </AnimationWrapper>

            <AnimationWrapper delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                <ThumbsUp className="h-10 w-10 text-desert mb-4" />
                <h3 className="text-xl font-bold mb-2">{dict.aboutUs.whoWeAre.values.environmental.title}</h3>
                <p>{dict.aboutUs.whoWeAre.values.environmental.description}</p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-desert text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimationWrapper>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{dict.aboutUs.whoWeAre.cta.title}</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">{dict.aboutUs.whoWeAre.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-desert hover:bg-gray-100">
                <Link href={`/${lang}/contact-us`}>{dict.aboutUs.whoWeAre.cta.contactUs}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 bg-[#25D366]"
              >
                <Link
                  href="https://api.whatsapp.com/send?phone=962777424837&text=Hello%2C%20I%20have%20question%20about%20your%20Ca"
                  target="_blank"
                >
                  {dict.aboutUs.whoWeAre.cta.whatsappUs}
                </Link>
              </Button>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </>
  )
}

