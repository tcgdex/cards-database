import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Ivysaur",
		fr: "Herbizarre",
		de: "Bisaknosp",
		it: "Ivysaur"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		2,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Bulbasaur",
		it: "Bulbasaur"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vine Whip",
				fr: "Fouet Lianes",
				de: "Rankenhieb",
				it: "Frustata"
			},

			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				en: "Poisonpowder",
				fr: "Poudre Toxik",
				de: "Giftpuder",
				it: "Velenpolvere"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das verteidigende Pokémon ist vergiftet.",
				it: "Il Pokémon Difensore è Avvelenato."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Son bulbe dorsal devient si gros qu'il ne peut plus se tenir sur ses membres postérieurs.",
		it: "Quando la pianta che ha sul dorso cresce, questo Pokémon non è più in grado di mantenersi eretto sulle zampe posteriori. LIV 20 N.2"
	},

	thirdParty: {
		cardmarket: 273725,
		tcgplayer: 42372
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],

	related: [
		{
			type: "translation",
			cardPath: "data-asia/PMCG/PMCG1/008.ts"
		}
	]
}

export default card
