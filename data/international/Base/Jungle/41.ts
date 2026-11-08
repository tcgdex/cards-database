import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Parasect",
		'fr-fr': "Parasect",
		'de-de': "Parasek"
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
		'en-us': "Paras",
		'fr-fr': "Paras"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Spore",
				'fr-fr': "Spore",
				'de-de': "Pilzspore"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das verteidigende Pokémon ist jetzt schlafend."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Schlitzer"
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
	retreat: 1,


	description: {
		'en-us': "A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places.",
		'fr-fr': "Une symbiose entre un parasite et un insecte. Le champignon a pris le contrôle sur son hôte."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273838,
				tcgplayer: 45144
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273838,
				tcgplayer: 45144
			}
		}
	],
}

export default card
