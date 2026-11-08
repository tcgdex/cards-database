import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Arbok",
		'fr-fr': "Arbok",
		'de-de': "Arbok"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [24],

	hp: 70,

	types: [
		"Grass"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Poison Spray",
				'fr-fr': "Jet-venin",
				'de-de': "Poison Spray"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "The Defending Pokémon is now Poisoned."
			}

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Reaction",
				'fr-fr': "Allergie poison",
				'de-de': "Poison Reaction"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Poisoned, this attack does 20 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est Empoisonné, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon is Poisoned, this attack does 20 damage plus 20 more damage."
			},
			damage: "20+",

		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83569,
				cardmarket: 274878
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83569,
				cardmarket: 274878
			},
		},
	],
}

export default card
