import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Sabrina's Gastly",
         ja: "サブリナの激しく",
         fr: "Sabrina's Gastly",
         de: "Sabrina ist gut",
         es: "Sabrina's Gastly",
         it: "Sabrina's Gastly",
         pt: "Sabrina está gastamente",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [92],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Gaseous Form",
            ja: "気体形",
            fr: "Forme gazeuse",
            de: "Gasförmige Form",
            es: "Forma gaseosa",
            it: "Forma gassosa",
            pt: "Forma gasosa",
          },
          effect: {
            en: "Sabrina's Gastly gets +10 HP for each Psychic Energy card attached to it. This power works even if Sabrina's Gastly is Asleep, Confused, or Paralyzed.",
            ja: "Sabrina's Gastlyは、それに取り付けられた各サイキックエネルギーカードに対して+10 HPを取得します。サブリナのガスティリーが眠っていて、混乱し、麻痺している場合でも、このパワーは機能します。",
            fr: "Gastly de Sabrina obtient +10 HP pour chaque carte d'énergie psychique qui y est attachée. Ce pouvoir fonctionne même si Gastly de Sabrina est endormi, confus ou paralysé.",
            de: "Sabrinas Gastly erhält +10 PS für jede daran befestigte psychische Energiekarte. Diese Kraft funktioniert auch, wenn Sabrinas Gastly schläft, verwirrt oder gelähmt ist.",
            es: "Sabrina's Gastly obtiene +10 hp por cada tarjeta de energía psíquica adjunta. Este poder funciona incluso si Sabrina's Gastly está dormido, confundido o paralizado.",
            it: "Sabrina's Gastly ottiene +10 CV per ogni carta di energia psichica attaccata ad essa. Questo potere funziona anche se Gastly di Sabrina è addormentato, confuso o paralizzato.",
            pt: "O Gastly Gastly de Sabrina recebe +10 hp para cada cartão de energia psíquica ligada a ele. Esse poder funciona mesmo que Gastly de Sabrina esteja dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Psychic"],
          name: {
            en: "Suffocating Gas",
            ja: "窒息するガス",
            fr: "Gaz étouffant",
            de: "Erstickungsgas",
            es: "Gas sofocante",
            it: "Gas soffocante",
            pt: "Gás sufocante",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
