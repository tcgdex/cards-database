import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Kingler",
		'fr-fr': "Krabboss",
		'de-de': "Kingler"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		99,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Krabby",
		'fr-fr': "Krabby"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Salt Water",
				'fr-fr': "Eau salée",
				'de-de': "Salt Water"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Water Energy cards and attach them to Kingler. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie  et attachez-les à Krabboss. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for up to 2  Energy cards and attach them to Kingler. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Pump",
				'fr-fr': "Hyper pompe",
				'de-de': "Hyper Pump"
			},
			effect: {
				'en-us': "Does 30 damage plus 20 more damage for each basic Energy attached to Kingler but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
				'fr-fr': "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque Énergie de base attachée à Krabboss qui n'a pas été utilisée pour payer le Coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 40 dégâts de cette façon.",
				'de-de': "Does 30 damage plus 20 more damage for each basic Energy attached to Kingler but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276202,
				tcgplayer: 86456
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276202,
				tcgplayer: 86456
			},
		}
	]
}

export default card
