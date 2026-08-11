import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Lairon",
		'fr-fr': "Galegon de Team Magma",
		'de-de': "Team Magmas Stollrak"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [305],

	hp: 70,

	types: [
		"Fighting"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
				'de-de': "Gnaw"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Land Sonic",
				'fr-fr': "Terre sonique",
				'de-de': "Land Sonic"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Confused.",
				'fr-fr': "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, il est maintenant Confus.",
				'de-de': "If the Defending Pokémon already has any damage counters on it, the Defending Pokémon is now Confused."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275813,
				tcgplayer: 89834
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275813,
				tcgplayer: 89834
			}
		},
	],

}

export default card
