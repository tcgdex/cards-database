import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Lapras ex",
		'fr-fr': "Lokhlass ex",
		'de-de': "Lapras ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [131],

	hp: 110,

	stage: "Basic",
	types: [
		"Water"
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Energy Ball",
				'fr-fr': "Boule d'énergie",
				'de-de': "Energy Ball"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each Energy attached to Lapras ex but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
				'fr-fr': "Inflige 10 points de dégât plus 10 points de dégât supplémentaires pour chaque Énergie attachée à Lokhlass Ex qui n'a pas été utilisée pour payer le coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				'de-de': "Does 10 damage plu 10 more damage for each Energy attached to Lapras ex but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde folie",
				'de-de': "Confuse Ray"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
				'de-de': "The Defending Pokémon is now Confused."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86626,
				cardmarket: 275747
			}
		}
	]
}

export default card
