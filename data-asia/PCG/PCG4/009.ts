import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Sunflora",
         ja: "サンフロラ",
         fr: "Sunflora",
         de: "Sonnenflora",
         es: "Sunflora",
         it: "Sunfra",
         pt: "Sunflora",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [192],
      hp: 70,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Dazzle Dance",
            ja: "まばゆいばかりのダンス",
            fr: "Danse éblouissante",
            de: "Dazzle Tanz",
            es: "Baile deslumbrante",
            it: "Danza dazzera",
            pt: "Dazzle Dance",
          },
          effect: {
            en: "Each Defending Pokemon is now Confused.",
            ja: "防御するポケモンはそれぞれ混乱しています。",
            fr: "Chaque Pokémon défendant est maintenant confus.",
            de: "Jedes verteidigende Pokemon ist jetzt verwirrt.",
            es: "Cada Pokémon defensor ahora está confundido.",
            it: "Ogni Pokemon in difesa è ora confuso.",
            pt: "Cada Pokemon atual agora está confuso.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Green Blast",
            ja: "グリーンブラスト",
            fr: "Explosion verte",
            de: "Grüne Explosion",
            es: "Explosión verde",
            it: "Esplosione verde",
            pt: "Explosão verde",
          },
          effect: {
            en: "Does 20 damage plus 10 more damage for each Grass Energy attached to all of your Pokemon.",
            ja: "すべてのポケモンに取り付けられた各草のエネルギーに対して20のダメージと10ダメージがさらに10ダメージを与えます。",
            fr: "Fait 20 dégâts plus 10 dommages supplémentaires pour chaque énergie de l'herbe attachée à tous vos Pokémon.",
            de: "Fügt 20 Schäden plus 10 weitere Schäden für jede Grasenergie, die an Ihrem gesamten Pokémon angebracht ist.",
            es: "Hace 20 daños más 10 daños más por cada energía de hierba unida a todos sus Pokémon.",
            it: "Fa 20 danni più 10 danni in più per ogni energia di erba attaccata a tutto il tuo Pokemon.",
            pt: "Causam 20 danos mais 10 mais danos para cada energia da grama anexada a todos os seus Pokémon.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
