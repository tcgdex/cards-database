import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Medicham",
         ja: "メディチャム",
         fr: "Médicham",
         de: "Medicham",
         es: "Medicham",
         it: "Medicham",
         pt: "Medicham",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [308],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Meditate",
            ja: "瞑想します",
            fr: "Méditer",
            de: "Meditieren",
            es: "Meditar",
            it: "Meditare",
            pt: "Meditar",
          },
          effect: {
            en: "Does 20 damage plus 10 more damage for each damage counter on the Defending Pokemon.",
            ja: "ディフェンディングポケモンの各ダメージカウンターで20のダメージと10ダメージがさらに10件のダメージを与えます。",
            fr: "Fait 20 dégâts plus 10 dommages supplémentaires pour chaque compteur de dégâts sur le Pokémon en défense.",
            de: "Fügt 20 Schäden plus 10 weitere Schäden für jeden Schadenschalter auf dem verteidigenden Pokémon.",
            es: "Hace 20 daños más 10 más de daño por cada contador de daños en el Pokémon defensor.",
            it: "Fa 20 danni più 10 danni in più per ciascun contatore del danno sul Pokemon in difesa.",
            pt: "Causa 20 danos mais 10 mais danos para cada contador de danos no Pokémon atual.",
          },
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Chakra Points",
            ja: "チャクラポイント",
            fr: "Points de chakra",
            de: "Chakra -Punkte",
            es: "Puntos de chakra",
            it: "Punti Chakra",
            pt: "Pontos de chakra",
          },
          effect: {
            en: "Does 10 damage plus 10 more damage for each card in your opponent's hand.",
            ja: "対戦相手の手の各カードに対して、10のダメージと10ダメージがさらに10ダメージを与えます。",
            fr: "Fait 10 dégâts plus 10 dégâts supplémentaires pour chaque carte dans la main de votre adversaire.",
            de: "Fügt 10 Schäden plus 10 weitere Schäden für jede Karte in der Hand Ihres Gegners.",
            es: "Hace 10 daños más 10 daños más por cada carta en la mano de tu oponente.",
            it: "Fa 10 danni più 10 danni in più per ogni carta nella mano dell'avversario.",
            pt: "10 danos mais 10 mais danos para cada cartão na mão do seu oponente.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
