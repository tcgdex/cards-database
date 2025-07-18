import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Exeggcute - 012/087",
         ja: "exeggcute -012/087",
         fr: "EXEGGCUTE - 012/087",
         de: "Exeggcute - 012/087",
         es: "Exeggcute - 012/087",
         it: "Exeggcute - 012/087",
         pt: "EXEGGCUTE - 012/087",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [102],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Growth Spurt",
            ja: "成長が急上昇します",
            fr: "Poussée de croissance",
            de: "Wachstumsschub",
            es: "Crecimiento",
            it: "Scatto di crescita",
            pt: "Surto de crescimento",
          },
          effect: {
            en: "Attach an Energy card from your hand to Exeggcute.",
            ja: "手からexeggcuteにエネルギーカードを取り付けます。",
            fr: "Fixez une carte d'énergie de votre main à EXEGGCUTE.",
            de: "Befestigen Sie eine Energiekarte von Ihrer Hand an exeggcute.",
            es: "Adjunte una tarjeta de energía de su mano a exeggcute.",
            it: "Attacca una carta energetica dalla mano a ExeggCute.",
            pt: "Anexe um cartão de energia da sua mão para exeggcute.",
          },
        },
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
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
