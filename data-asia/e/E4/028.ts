import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Omanyte",
         ja: "オマニテ",
         fr: "Omanyte",
         de: "Omanyte",
         es: "Omanyte",
         it: "Omanyte",
         pt: "Omanyte",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [138],
      hp: 60,
      types: ["Water"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Water of Evolution",
            ja: "進化の水",
            fr: "Eau de l'évolution",
            de: "Wasser der Evolution",
            es: "Agua de la evolución",
            it: "Acqua di evoluzione",
            pt: "Água da evolução",
          },
          effect: {
            en: "Put an Omastar from your hand onto Omanyte. This counts as evolving Omanyte.",
            ja: "Omanyteに手からオマスターを置きます。これは進化するオマニテとしてカウントされます。",
            fr: "Mettez un Omastar de votre main sur Omanyte. Cela compte comme en évolution d'Omanyte.",
            de: "Setzen Sie einen Omastar aus Ihrer Hand auf die Omanyte. Dies gilt als sich entwickelnde Omanyte.",
            es: "Pon una OmaStar de tu mano en Omanyte. Esto cuenta como en evolución de Omanyte.",
            it: "Metti un omastar dalla tua mano su Omanyte. Questo conta come Omanyte in evoluzione.",
            pt: "Coloque um OMASTAR da sua mão em Omanyte. Isso conta como Omanyte em evolução.",
          },
        },
        {
          cost: ["Water", "Colorless"],
          name: {
            en: "Drag Off",
            ja: "ドラッグします",
            fr: "Faire glisser",
            de: "Sich abziehen",
            es: "Retirarse",
            it: "Trascina",
            pt: "Arraste",
          },
          effect: {
            en: "Before doing damage, you may choose 1 of your opponent's Benched Pokemon and switch it with the Defending Pokemon.",
            ja: "ダメージを与える前に、対戦相手のベンチポケモンの1つを選択し、防御ポケモンに切り替えることができます。",
            fr: "Avant de faire des dégâts, vous pouvez choisir un des Pokémon bancés de votre adversaire et le changer avec le Pokémon en défense.",
            de: "Bevor Sie Schaden anrichten, können Sie 1 der Bankpokemon Ihres Gegners auswählen und es mit dem verteidigenden Pokemon wechseln.",
            es: "Antes de hacer daño, puede elegir 1 de los Pokémon de banca de su oponente y cambiarlo con el Pokémon defensor.",
            it: "Prima di fare danni, puoi scegliere 1 dei Pokemon in panchina del tuo avversario e cambiarlo con il Pokemon in carica.",
            pt: "Antes de causar danos, você pode escolher 1 do Pokémon bancado do seu oponente e trocá -lo com o Pokémon defensivo.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
