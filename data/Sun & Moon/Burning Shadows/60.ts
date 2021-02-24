import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Meowstic",
		fr: "Mistigrix",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		678,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Espurr",
		fr: "Psystigri",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Allure",
				fr: "Allure",
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hand Kinesis",
				fr: "Télékinésie en Main",
			},
			effect: {
				en: "This attack does 10 damage for each card in your hand.",
				fr: "Cette attaque inflige 10 dégâts pour chaque carte dans votre main.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
