import type { HeroType, CategoryWithDocumentsType } from "@app/types";
import { getHeros, getCategoryWithDocuments } from "@sanity/lib/query";
import SanityHero from "@components/SanityHero";
import PageBreak from "@components/PageBreak";
import { urlForImage } from "@sanity/lib/image";
import { Card } from "@components/ui/card/Card";
import SubstackHero from "@components/SubstackHero";

export default async function Home() {
  const heros: HeroType[] = await getHeros();
  const handmade: CategoryWithDocumentsType =
    await getCategoryWithDocuments("handmade");

  return (
    <>
      <div className="max-w-2xl mx-auto px-6 md:px-8 lg:px-12 py-12">
        {handmade.relatedDocuments.length > 0 && (
          <section>
            <PageBreak title="latest recipes . handmade with love" />
            <div className="my-9">
              {handmade.relatedDocuments.length > 0 &&
                handmade.relatedDocuments.map((document) => (
                  <div className="border-b border-pink-200 mb-4 last:border-b-0 text-pink-400">
                    <Card
                      key={document._id}
                      href={`recipes/${document.slug.current}`}
                      image={
                        document.mainImage
                          ? urlForImage(document.mainImage).width(400).url()
                          : null
                      }
                      title={document.title}
                    />
                  </div>
                ))}
            </div>
          </section>
        )}
        {heros.length > 0 ? (
          <section>
            <PageBreak title="mushroom projects" />
            <div className="grid grid-rows-1 md:grid-cols-2 gap-4 my-9">
              {heros.map((hero) => (
                <SanityHero hero={hero} key={hero._id} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
      <SubstackHero />
    </>
  );
}
