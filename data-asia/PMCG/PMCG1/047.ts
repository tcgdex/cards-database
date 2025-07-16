import {Card} from "../../../interfaces"
import Set from "../PMCG1"

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
      hp: 60,
      types: ["Psychic"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Psychic"],
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
          damage: None,
        },
        {
          cost: ["Psychic", "Psychic"],
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
            en: "You can't use this attack unless the Defending Pokemon is Asleep.",
            ja: "防御するポケモンが眠っていない限り、この攻撃を使用することはできません。",
            fr: "Vous ne pouvez pas utiliser cette attaque à moins que le Pokémon en défense dormait.",
            de: "Sie können diesen Angriff nicht verwenden, wenn das verteidigende Pokemon schläft.",
            es: "No puedes usar este ataque a menos que el Pokémon defensor esté dormido.",
            it: "Non puoi usare questo attacco a meno che il Pokemon in carica non dormi.",
            pt: "Você não pode usar esse ataque, a menos que o Pokemon defensor esteja dormindo.",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          subtype: "shadowless",
        },
        {
          type: "normal",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
