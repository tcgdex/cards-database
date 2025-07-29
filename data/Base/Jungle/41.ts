import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Parasect",
		fr: "Parasect",
		de: "Parasek"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		47,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Paras",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Spore",
				fr: "Spore",
				de: "Pilzspore"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das verteidigende Pokémon ist jetzt schlafend."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Une symbiose entre un parasite et un insecte. Le champignon a pris le contrôle sur son hôte."
	},

	thirdParty: {
		cardmarket: 273838
	}
}

export default card
