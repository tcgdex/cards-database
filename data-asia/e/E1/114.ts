import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Pichu - 114/128",
         ja: "ピチュ-114/128",
         fr: "Pichu - 114/128",
         de: "Pichu - 114/128",
         es: "Pichu - 114/128",
         it: "Pichu - 114/128",
         pt: "Pichu - 114/128",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [172],
      hp: 30,
      types: ["Lightning"],
      stage: "Baby",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Energy Patch",
            ja: "エネルギーパッチ",
            fr: "Patch d'énergie",
            de: "Energy Patch",
            es: "Parche de energía",
            it: "Patch di energia",
            pt: "Adesivo de energia",
          },
          effect: {
            en: "Take a basic Energy card attached to 1 of your Pokemon and attach it to another of your Pokemon.",
            ja: "ポケモンの1つに取り付けられた基本的なエネルギーカードを取り、ポケモンのもう1つに取り付けます。",
            fr: "Prenez une carte d'énergie de base attachée à 1 de votre Pokémon et attachez-la à un autre de votre Pokémon.",
            de: "Nehmen Sie eine grundlegende Energiekarte, die an 1 Ihres Pokémons angebracht ist, und befestigen Sie sie an einem anderen Ihres Pokémon.",
            es: "Tome una tarjeta de energía básica unida a 1 de su Pokémon y adhiérase a otro de su Pokémon.",
            it: "Prendi una carta energetica di base collegata a 1 del tuo Pokemon e attaccalo a un altro del tuo Pokemon.",
            pt: "Pegue um cartão de energia básico conectado a 1 do seu Pokémon e prenda -o a outro de seu Pokémon.",
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
