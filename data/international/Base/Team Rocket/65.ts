import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
		'de-de': "Enton"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		54,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Dizziness",
				'fr-fr': "Vertige",
				'de-de': "Dizziness"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'de-de': "Draw a card."
			},

		},
		{
			cost: [
				"Colorless",
				"Water",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'de-de': "Water Gun"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each Energy attached to Psyduck but not used to pay for this attack. You can't add more than 20 damage in this way.",
				'fr-fr': "Inflige 20 dégâts plus 20 dégâts supplémentaires pour chaque Énergie  attachée à Psykokwak en plus du coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
				'de-de': "Does 20 damage plus 10 more damage for each  Energy attached to Psyduck but not used to pay for this attack. You can't add more than 20 damage in this way."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It is often seen holding its head in its paws, as if it were suffering from a headache.",
		'fr-fr': "On le voit souvent se prendre la tête entre les mains, comme s'il souffrait de migraines."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274118,
				tcgplayer: 88431
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274118,
				tcgplayer: 88431
			}
		}
	]
}

export default card
