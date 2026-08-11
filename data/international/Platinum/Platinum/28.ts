import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Giratina",
		'fr-fr': "Giratina",
		'de-de': "Giratina"
	},

	illustrator: "Yusuke Ishikawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [487],

	hp: 110,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Claw",
				'fr-fr': "Dracogriffe",
				'de-de': "Dragon Claw"
			},

			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Dragonbreath",
				'fr-fr': "Dracosouffle",
				'de-de': "Dragonbreath"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If tails, this attack does nothing. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It was banished for its violence. It silently gazed upon the old world from the Distortion World."
	},

	variants: [		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85734,
				cardmarket: 278430
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				tcgplayer: 125078
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278430,
				tcgplayer: 85734
			}
		}
	],

}

export default card
