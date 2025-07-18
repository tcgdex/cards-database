import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
      set: Set,
      name: {
         en: "Whismur",
         ja: "ウィスム",
         fr: "Whismur",
         de: "Whismur",
         es: "Whismur",
         it: "Whismur",
         pt: "Whismur",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [293],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Wail",
            ja: "泣き叫ぶ",
            fr: "Lamenter",
            de: "Jammern",
            es: "Gemido",
            it: "Lamento",
            pt: "Lamento",
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
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
      ],
};
