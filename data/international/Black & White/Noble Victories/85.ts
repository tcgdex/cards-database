import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Audino",
		'fr-fr': "Nanméouïe",
		'es-es': "Audino",
		'it-it': "Audino",
		'pt-br': "Audino",
		'de-de': "Ohrdoch"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		531,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Do the Wave",
				'fr-fr': "Faites la Vague",
			},
			effect: {
				'en-us': "Does 10 damage times the number of your Benched Pokémon.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de vos Pokémon de Banc.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It touches others with the feelers on its ears, using the sound of their heartbeats to tell how they are feeling.",
	},

	thirdParty: {
		cardmarket: 280208,
		tcgplayer: 83662
	}
}

export default card
