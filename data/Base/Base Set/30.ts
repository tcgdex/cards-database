import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Ivysaur",
		pt: "Ivysaur",
		fr: "Herbizarre",
		de: "Bisaknosp"
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
		en: "Barboach",
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
				pt: "Vine Whip",
				fr: "Fouet Lianes",
				de: "Rankenhieb"
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
				pt: "Poisonpowder",
				fr: "Poudre Toxik",
				de: "Giftpuder"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				pt: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das verteidigende Pokémon ist vergiftet."
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
		fr: "Son bulbe dorsal devient si gros qu'il ne peut plus se tenir sur ses membres postérieurs."
	}
}

export default card
