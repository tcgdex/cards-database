import {Card} from "../../../interfaces"
import Set from "../E5"

const card: Card = {
      set: Set,
      name: {
         en: "Gastly",
         ja: "ガストリー",
         fr: "Vigoureux",
         de: "Gastly",
         es: "Duende",
         it: "Gastly",
         pt: "Gastly",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [92],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Haunt",
            ja: "出没",
            fr: "Hanter",
            de: "Verfolgen",
            es: "Guarida",
            it: "Haunt",
            pt: "Assombrar",
          },
          effect: {
            en: "Put a damage counter on the Defending Pokemon.",
            ja: "防御ポケモンにダメージカウンターを置きます。",
            fr: "Mettez un compteur de dégâts sur le Pokémon en défense.",
            de: "Setzen Sie dem verteidigenden Pokemon einen Schadenschalter.",
            es: "Pon un mostrador de daño en el Pokémon defensor.",
            it: "Metti un contatore del danno sul Pokemon in carica.",
            pt: "Coloque um contador de danos no Pokémon atual.",
          },
        },
      ],

      retreat: 1,

};
