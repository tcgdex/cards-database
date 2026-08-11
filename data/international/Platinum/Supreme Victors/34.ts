import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Medicham",
		'fr-fr': "Charmina",
		'de-de': "Meditalis"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [308],

	hp: 90,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Meditite",
		'fr-fr': "Meditikka"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Channeling",
				'fr-fr': "Canaliser",
				'de-de': "Kanalisieren"
			},
			effect: {
				'en-us': "Your opponent draws 2 cards.",
				'fr-fr': "Votre adversaire pioche 2 cartes.",
				'de-de': "Dein Gegner zieht 2 Karten."
			},
			damage: 60,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Chakra Points",
				'fr-fr': "Chakras",
				'de-de': "Chakrapunkte"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each card in your opponent's hand.",
				'fr-fr': "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque carte dans la main de votre adversaire.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede Handkarte deines Gegners zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It gains the ability to see the aura of its opponents by honing its mind through starvation."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87276,
				cardmarket: 278725
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278725,
				tcgplayer: 87276
			}
		},
	],

}

export default card
