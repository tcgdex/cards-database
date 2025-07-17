import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Koga's Tangela",
         ja: "コガのタンゲラ",
         fr: "Tangela de Koga",
         de: "Kogas Tangela",
         es: "Tangela de Koga",
         it: "Koga's Tangola",
         pt: "Koga's Tangela",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [114],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Sleep Powder",
            ja: "スリープパウダー",
            fr: "Poudre de sommeil",
            de: "Schlafpulver",
            es: "Polvo de sueño",
            it: "Polvere di sonno",
            pt: "Sono Powder",
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
          cost: ["Grass", "Colorless"],
          name: {
            en: "Grasping Vine",
            ja: "つるのをつかむ",
            fr: "Vigner de la vigne",
            de: "Weinrebe greifen",
            es: "Vid alcista",
            it: "Afferrare la vite",
            pt: "Vinha de agarrar",
          },
          effect: {
            en: "Flip a coin. If heads, draw 2 cards.",
            ja: "コインをひっくり返します。頭の場合は、2枚のカードを描きます。",
            fr: "Retourner une pièce. Si les têtes, dessinez 2 cartes.",
            de: "Eine Münze drehen. Wenn Köpfe, zeichnen Sie 2 Karten.",
            es: "Voltea una moneda. Si se dirige, dibuje 2 cartas.",
            it: "Capovolgi una moneta. Se la testa, disegna 2 carte.",
            pt: "Vire uma moeda. Se cabeças, desenhe 2 cartas.",
          },
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
