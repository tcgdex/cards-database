import {Card} from "../../../interfaces"
import Set from "../PCG7"

const card: Card = {
      set: Set,
      name: {
         en: "Pidgeotto (Delta Species)",
         ja: "ピッジット（デルタ種）",
         fr: "Pidgeotto (espèces delta)",
         de: "Pidgeotto (Delta -Arten)",
         es: "Pidgeotto (especie delta)",
         it: "Pidgeotto (Delta Species)",
         pt: "Pidgeotto (espécie Delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [17],
      hp: 70,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Lightning", "Colorless"],
          name: {
            en: "Whirlwind",
            ja: "旋風",
            fr: "Tourbillon",
            de: "Wirbelwind",
            es: "Torbellino",
            it: "Turbine",
            pt: "Turbilhão",
          },
          effect: {
            en: "Your opponent switches the Defending Pokemon with 1 of his or her Benched Pokemon.",
            ja: "対戦相手は、ディフェンディングポケモンを1匹のベンチポケモンで切り替えます。",
            fr: "Votre adversaire change le Pokémon en défense avec un de son Pokémon bancté.",
            de: "Ihr Gegner wechselt das verteidigende Pokémon mit einem seiner oder ihres Bankpokémon.",
            es: "Tu oponente cambia al Pokémon defensor con 1 de su Pokémon de banca.",
            it: "Il tuo avversario cambia il Pokemon in difesa con 1 del suo Pokemon in panchina.",
            pt: "Seu oponente troca o Pokémon atual com 1 de seu Pokémon em banco.",
          },
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
