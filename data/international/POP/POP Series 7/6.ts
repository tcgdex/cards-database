import { Card } from 'models/database/card'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		'en-us': "Delibird",
		'fr-fr': "Delibird"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [225],

	hp: 70,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Present",
				'fr-fr': "Cadeau"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez 1 carte dans votre deck et placez-la dans votre main. Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Ice Ball",
				'fr-fr': "Ball'glace"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],
	description: {
		'en-us': "It carries food rolled up in its tail. It has the habit of sharing food with people lost in mountains."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84749,
				cardmarket: 278038
			},
		},
	],

}

export default card
