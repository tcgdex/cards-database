import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Swablu",
         ja: "Swablu",
         fr: "Swablu",
         de: "Swablu",
         es: "Swablu",
         it: "Swablu",
         pt: "Swablu",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [333],
      hp: 40,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Lullaby",
            ja: "子守lulaby",
            fr: "Berceuse",
            de: "Wiegenlied",
            es: "Canción de cuna",
            it: "Ninna nanna",
            pt: "Canção de ninar",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
          damage: 10,
        },
        {
          cost: ["Lightning"],
          name: {
            en: "Stifling Fluff",
            ja: "綿毛を息苦しい",
            fr: "Peluches étouffantes",
            de: "Erstickendes Schlucken",
            es: "Pelusa",
            it: "Lanugine soffocante",
            pt: "Sufocante fofo",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
