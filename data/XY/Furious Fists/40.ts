import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Gothorita",
		fr: "Mesmérella",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		575,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gothita",
		fr: "Scrutella",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fortunate Eye",
				fr: "Regard Chanceux",
			},
			effect: {
				en: "Look at the top 5 cards of your opponent’s deck and put them back on top of his or her deck in any order.",
				fr: "Regardez les 5 cartes du dessus du deck de votre adversaire et replacez-les sur le dessus de son deck dans l’ordre de votre choix.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Smack",
				fr: "Claque",
			},

			damage: 30,

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
