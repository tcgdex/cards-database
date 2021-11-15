import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Croconaw",
		fr: "Crocrodil"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		159,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Totodile",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				en: "Bite",
				fr: "Morsure"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Sonic",
				fr: "Aquasonique"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance."
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
