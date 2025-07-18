import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Will's Xatu",
         ja: "ウィルのxatu",
         fr: "Xatu de Will",
         de: "Wills Xatu",
         es: "Will's Xatu",
         it: "Xatu di Will",
         pt: "Will's Xatu",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [178],
      hp: 60,
      types: ["Psychic"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Peck",
            ja: "ペック",
            fr: "Picorer",
            de: "Picken",
            es: "Picotear",
            it: "Peck",
            pt: "Peck",
          },
          damage: 10,
        },
        {
          cost: ["Psychic", "Psychic"],
          name: {
            en: "Pain Amplifier",
            ja: "痛みアンプ",
            fr: "Amplificateur de douleur",
            de: "Schmerzverstärker",
            es: "Amplificador del dolor",
            it: "Amplificatore del dolore",
            pt: "Amplificador de dor",
          },
          effect: {
            en: "Put a damage counter on each of your opponent's Pokemon that already has any damage counters on it.",
            ja: "対戦相手のポケモンのそれぞれにダメージカウンターを置いてください。",
            fr: "Mettez un compteur de dégâts sur chacun des Pokémon de votre adversaire qui a déjà des compteurs de dégâts dessus.",
            de: "Legen Sie einen Schadenschalter auf das Pokémon Ihres Gegners, der bereits Schadenszähler hat.",
            es: "Pon un mostrador de daño en el Pokémon de cada uno de tu oponente que ya tiene algún contador de daño.",
            it: "Metti un contatore di danni su ciascuno dei Pokemon del tuo avversario che ha già contatori di danni su di esso.",
            pt: "Coloque um contador de danos em cada um dos Pokémon do seu oponente que já tem algum contador de danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
