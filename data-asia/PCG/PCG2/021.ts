import {Card} from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Staryu",
         ja: "staryu",
         fr: "Staryu",
         de: "Staryu",
         es: "Staryu",
         it: "Staryu",
         pt: "Staryu",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [120],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Rapid Spin",
            ja: "急速なスピン",
            fr: "Rotation rapide",
            de: "Schnellspin",
            es: "Giro rápido",
            it: "Spin rapido",
            pt: "Rotação rápida",
          },
          effect: {
            en: "Your opponent switches the Defending Pokemon with 1 of his or her Benched Pokemon, if any. You switch Staryu with 1 of your Benched Pokemon, if any.",
            ja: "対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。ベンチ付きポケモンの1つでStaryuを切り替えます。",
            fr: "Votre adversaire change le Pokémon en défense avec un de son Pokémon banc, le cas échéant. Vous changez de Staryu avec 1 de votre Pokémon banc, le cas échéant.",
            de: "Ihr Gegner wechselt das verteidigende Pokémon mit einem seiner oder ihres Bankpokemon, falls vorhanden. Sie wechseln Staryu mit 1 Ihrer Bank -Pokemon, falls vorhanden.",
            es: "Tu oponente cambia al Pokémon defensor con 1 de su Pokémon de banca, si es que hay alguno. Cambias de Staryu con 1 de tu Pokémon de banca, si lo hay.",
            it: "Il tuo avversario cambia il Pokemon in difesa con 1 del suo Pokemon in panchina, se presente. Cambierai Staryu con 1 del tuo Pokemon in panchina, se presente.",
            pt: "Seu oponente troca o Pokémon atual com 1 de seu Pokémon em banco, se houver. Você troca de Staryu com 1 de seu Pokémon em banco, se houver.",
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
