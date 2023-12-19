import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Medicham",
		fr: "Charmina",
		de: "Meditalis"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		308,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Meditite",
		fr: "Meditikka",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Channeling",
				fr: "Canaliser",
				de: "Kanalisieren"
			},
			effect: {
				en: "Your opponent draws 2 cards.",
				fr: "Votre adversaire pioche 2 cartes.",
				de: "Dein Gegner zieht 2 Karten."
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
				en: "Chakra Points",
				fr: "Chakras",
				de: "Chakrapunkte"
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each card in your opponent's hand.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque carte dans la main de votre adversaire.",
				de: "Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte für jede Handkarte deines Gegners zu."
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



}

export default card
