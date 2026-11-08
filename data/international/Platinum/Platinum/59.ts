import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Prinplup",
		'fr-fr': "Prinplouf",
		'de-de': "Pliprin"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [394],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Piplup",
		'fr-fr': "Tiplouf"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf",
				'de-de': "Surf"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Bubblebeam",
				'fr-fr': "Bulles d'O",
				'de-de': "Bubblebeam"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Because every PRINPLUP considers itself to be the most important, they can never form a group."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 88371,
				cardmarket: 278480
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278480,
				tcgplayer: 88371
			}
		}
	],

}

export default card
