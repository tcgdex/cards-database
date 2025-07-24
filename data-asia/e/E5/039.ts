import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Voltorb",
         ja: "Voltorb",
         fr: "Voltorbe",
         de: "Voltorb",
         es: "Voltorbo",
         it: "Voltorb",
         pt: "Voltorb",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [100],
      hp: 50,
      types: ["Lightning"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Lightning"],
          name: {
            en: "Magnetic Pull",
            ja: "磁気プル",
            fr: "Traction magnétique",
            de: "Magnetischer Zug",
            es: "Tirón magnético",
            it: "Tiro magnetico",
            pt: "Puxão magnético",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, choose 1 of them and switch it with the Defending Pokemon.",
            ja: "対戦相手がベンチポケモンを持っている場合は、それらの1つを選択し、防御ポケモンで切り替えます。",
            fr: "Si votre adversaire a des pokemon bancés, choisissez-en 1 et changez-le avec le Pokémon en défense.",
            de: "Wenn Ihr Gegner ein Bank -Pokémon hat, wählen Sie 1 davon und wechseln Sie es mit dem verteidigenden Pokemon.",
            es: "Si tu oponente tiene algún Pokémon de banca, elige 1 de ellos y cambia con el Pokémon defensor.",
            it: "Se il tuo avversario ha dei Pokemon in panchina, scegline 1 e cambialo con il Pokemon in difesa.",
            pt: "Se o seu oponente tiver algum Pokémon em banco, escolha 1 deles e mude -o com o Pokémon defensivo.",
          },
        },
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Spin Tackle",
            ja: "スピンタックル",
            fr: "Tacle de rotation",
            de: "Spin -Tackle",
            es: "Giratel",
            it: "Attrezzatura di spin",
            pt: "Tackle de rotação",
          },
          effect: {
            en: "Voltorb does 10 damage to itself.",
            ja: "Voltorbはそれ自体に10ダメージを与えます。",
            fr: "Voltorb fait 10 dégâts à lui-même.",
            de: "Voltorb schädigt sich 10.",
            es: "Voltorb hace 10 daños a sí mismo.",
            it: "Voltorb fa 10 danni a se stesso.",
            pt: "Voltorb causa 10 danos a si mesmo.",
          },
          damage: 30,
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
