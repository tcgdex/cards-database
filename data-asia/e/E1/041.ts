import {Card} from "../../../interfaces"
import Set from "../E1"

const card: Card = {
      set: Set,
      name: {
         en: "Haunter",
         ja: "ハンター",
         fr: "Hancher",
         de: "Haunter",
         es: "Perseguidor",
         it: "Haunter",
         pt: "Assombro",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [93],
      hp: 70,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Nightmare",
            ja: "悪夢",
            fr: "Cauchemar",
            de: "Alptraum",
            es: "Pesadilla",
            it: "Incubo",
            pt: "Pesadelo",
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
          damage: 20,
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
            en: "If the Defending Pokemon isn't Asleep, this attack does nothing.",
            ja: "防御ポケモンが眠っていない場合、この攻撃は何もしません。",
            fr: "Si le Pokémon en défense n'est pas endormi, cette attaque ne fait rien.",
            de: "Wenn das verteidigende Pokemon nicht schläft, tut dieser Angriff nichts.",
            es: "Si el Pokémon defensor no está dormido, este ataque no hace nada.",
            it: "Se il Pokemon in difesa non è addormentato, questo attacco non fa nulla.",
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
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
