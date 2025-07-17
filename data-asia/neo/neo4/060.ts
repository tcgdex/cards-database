import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Unown Z",
         ja: "ZなしZ",
         fr: "Non-bas",
         de: "Unown z",
         es: "Sin own z",
         it: "Unown z",
         pt: "Unown Z.",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [201],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "ZOOM[Zoom]",
            ja: "ズーム[ズーム]",
            fr: "Zoom [zoom]",
            de: "Zoom [Zoom]",
            es: "Zoom [Zoom]",
            it: "Zoom [Zoom]",
            pt: "Zoom [zoom]",
          },
          effect: {
            en: "As long as Unown [Z] is Benched, you pay no Energy cost to retreat a Pokmon with Unown in its name.",
            ja: "[Z]がベンチにある限り、あなたはその名のないポケモンを退却するためにエネルギーコストを支払いません。",
            fr: "Tant que non-bas [z] est mis en banc, vous ne payez aucun coût d'énergie pour retirer un pokemon avec non-bas en son nom.",
            de: "Solange Unown [Z] auf die Bank gesetzt ist, zahlen Sie keine Energiekosten, um ein Pokémon mit Unown in seinem Namen zurückzuziehen.",
            es: "Mientras no sea Onder [Z], no pague el costo de energía para retirarse a un Pokémon sin Own en su nombre.",
            it: "Finché non è in panchina [Z], non si paga alcun costo energetico per ritirare un Pokemon con Unwnown nel suo nome.",
            pt: "Enquanto o UNOWN [Z] estiver em banco, você não paga o custo de energia para recuar um Pokemon com Unwnow em seu nome.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Hidden Power",
            ja: "隠された力",
            fr: "Pouvoir caché",
            de: "Versteckte Kraft",
            es: "Poder oculto",
            it: "Potere nascosto",
            pt: "Poder oculto",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
