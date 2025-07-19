import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Kirlia",
         ja: "キルリア",
         fr: "Kirlia",
         de: "Kliria",
         es: "Kirlia",
         it: "Kirlia",
         pt: "Kirlia",
      },

      rarity: "Unknown",
      category: "Pokemon",
      dexId: [281],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Hypnosis",
            ja: "催眠",
            fr: "Hypnose",
            de: "Hypnose",
            es: "Hipnosis",
            it: "Ipnosi",
            pt: "Hipnose",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
        },
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Dream Eater",
            ja: "夢の食べる人",
            fr: "Mangeur de rêve",
            de: "Traumfresser",
            es: "Dream Eater",
            it: "Mangiatore da sogno",
            pt: "Dream Eater",
          },
          effect: {
            en: "If the Defending Pokemon is not Asleep, this attack does nothing.",
            ja: "防御するポケモンが眠っていない場合、この攻撃は何もしません。",
            fr: "Si le Pokémon en défense n'est pas endormi, cette attaque ne fait rien.",
            de: "Wenn das verteidigende Pokemon nicht schläft, tut dieser Angriff nichts.",
            es: "Si el Pokémon defensor no está dormido, este ataque no hace nada.",
            it: "Se il Pokemon in difesa non dorme, questo attacco non fa nulla.",
            pt: "Se o Pokémon atual não estiver dormindo, esse ataque não faz nada.",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
