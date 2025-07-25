import {Card} from "../../../interfaces"
import Set from "../E2"

const card: Card = {
      set: Set,
      name: {
         en: "Magnemite - 072/092",
         ja: "マグナイト-072/092",
         fr: "MAGEMITE - 072/092",
         de: "Magnemite - 072/092",
         es: "Magnemite - 072/092",
         it: "Magnemite - 072/092",
         pt: "Magnemite - 072/092",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [81],
      hp: 40,
      types: ["Metal"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Metal"],
          name: {
            en: "Attract",
            ja: "引きつける",
            fr: "Attirer",
            de: "Anziehen",
            es: "Atraer",
            it: "Attirare",
            pt: "Atrair",
          },
          effect: {
            en: "Choose 1 of your opponent's Benched Pokemon and switch the Defending Pokemon with it.",
            ja: "対戦相手のベンチ付きポケモンの1つを選択し、防御ポケモンをそれで切り替えます。",
            fr: "Choisissez 1 des pokemon bancés de votre adversaire et changez avec le Pokémon en défense.",
            de: "Wählen Sie 1 der Bankpokemon Ihres Gegners und wechseln Sie damit das verteidigende Pokémon.",
            es: "Elija 1 de los Pokémon de banca de su oponente y cambie el Pokémon defensor con él.",
            it: "Scegli 1 del Pokemon in panchina del tuo avversario e cambia il Pokemon in carica con esso.",
            pt: "Escolha 1 do Pokémon com bancada do seu oponente e mude o Pokémon atual com ele.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Tackle",
            ja: "取り組む",
            fr: "Tacle",
            de: "Tackle",
            es: "Abordar",
            it: "Attrezzatura",
            pt: "Enfrentar",
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
