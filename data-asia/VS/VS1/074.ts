import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Will's Jynx",
         ja: "ウィルのジンクス",
         fr: "Jynx de Will",
         de: "Will's Jynx",
         es: "Jynx de Will",
         it: "Will's Jynx",
         pt: "Jynx de Will",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [124],
      hp: 50,
      types: ["Psychic"],
      stage: "Basic",

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
            en: "Meditate",
            ja: "瞑想します",
            fr: "Méditer",
            de: "Meditieren",
            es: "Meditar",
            it: "Meditare",
            pt: "Meditar",
          },
          effect: {
            en: "This attack does 10 damage plus 10 more damage for each damage counter on the Defending Pokemon.",
            ja: "この攻撃は、ディフェンディングポケモンの各ダメージカウンターに対して10ダメージに加えて10ダメージを与えます。",
            fr: "Cette attaque fait 10 dégâts plus 10 dégâts supplémentaires pour chaque compteur de dégâts sur le Pokémon en défense.",
            de: "Dieser Angriff verursacht 10 Schäden plus 10 weitere Schäden für jeden Schadenschalter am verteidigenden Pokémon.",
            es: "Este ataque hace 10 daños más 10 10 más de daño por cada contador de daño en el Pokémon defensor.",
            it: "Questo attacco infligge 10 danni più 10 danni per ogni danno sul Pokemon in difesa.",
            pt: "Este ataque causa 10 danos mais 10 mais danos para cada contador de danos no Pokémon atual.",
          },
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
