import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Audino",
		'fr-fr': "Nanméouïe",
		'es-es': "Audino",
		'it-it': "Audino",
		'pt-br': "Audino",
		'de-de': "Ohrdoch"
	},

	illustrator: "Kagemaru Himeno",
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
			],
			name: {
				'en-us': "Powerful Slap",
				'fr-fr': "Grosse Baffe",
			},
			effect: {
				'en-us': "Flip a coin for each Energy attached to this Pokémon. This attack does 40 damage times the number of heads.",
				'fr-fr': "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heal Pulse",
				'fr-fr': "Vibra Soin",
			},
			effect: {
				'en-us': "Heal 50 damage from 1 of your Pokémon.",
				'fr-fr': "Soignez 50 dégâts à 1 de vos Pokémon.",
			},

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
		'en-us': "Its auditory sense is astounding. It has a radar-like ability to understand its surrounding through slight sounds.",
	},

	thirdParty: {
		cardmarket: 280048,
		tcgplayer: 83661
	}
}

export default card
