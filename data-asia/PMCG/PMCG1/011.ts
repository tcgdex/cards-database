import {Card} from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Venusaur",
         ja: "金星",
         fr: "Vénusaure",
         de: "Venusaurier",
         es: "Venusaur",
         it: "Venusaur",
         pt: "Venusaur",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [3],
      hp: 100,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Energy Trans",
            ja: "エネルギートランス",
            fr: "Trans d'énergie",
            de: "Energie trans",
            es: "Trans de energía",
            it: "ENERGIA Trans",
            pt: "Energia trans",
          },
          effect: {
            en: "As often as you like during your turn, you may move a Grass Energy from 1 of your Pokmon to another of your Pokmon. This Pokmon Power can't be used if this Pokmon is Asleep, Confused, or Paralyzed.",
            ja: "ターン中に好きなように、ポケモンの1匹からポケモンの1つに草のエネルギーを移動することができます。このポクモンが眠っている、混乱し、麻痺している場合、このポケモンの力は使用できません。",
            fr: "Aussi souvent que vous le souhaitez à votre tour, vous pouvez déplacer une énergie de l'herbe de 1 de votre Pokémon à un autre de votre Pokémon. Cette puissance Pokémon ne peut pas être utilisée si ce Pokmon est endormi, confus ou paralysé.",
            de: "So oft Sie während Ihres Zuges mögen, können Sie eine Grasergie von 1 Ihres Pokémons zu einem anderen Ihrer Pokémon bewegen. Diese Pokemon -Kraft kann nicht verwendet werden, wenn dieses Pokmon schläft, verwirrt oder gelähmt ist.",
            es: "Tan a menudo como desee durante su turno, puede mover una energía de hierba de 1 de su Pokémon a otro de su Pokémon. Este poder de Pokémon no se puede usar si este Pokmon está dormido, confundido o paralizado.",
            it: "Tutte le volte che vuoi durante il tuo turno, potresti spostare un'energia di erba da 1 del tuo Pokemon a un altro del tuo Pokemon. Questa potenza di Pokemon non può essere utilizzata se questo Pokmon è addormentato, confuso o paralizzato.",
            pt: "Sempre que quiser durante o seu turno, você pode mover uma energia de grama de 1 do seu Pokémon para outro de seu Pokémon. Esse poder de Pokemon não pode ser usado se esse Pokmon estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass", "Grass", "Grass"],
          name: {
            en: "Solar Beam",
            ja: "ソーラービーム",
            fr: "Faisceau solaire",
            de: "Solarstrahl",
            es: "Viga solar",
            it: "Raggio solare",
            pt: "Feixe solar",
          },
          damage: 60,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          subtype: "shadowless",
        },
        {
          type: "holo",
          subtype: "shadowless",
          stamp: ["1st edition"],
        },
      ],
};
