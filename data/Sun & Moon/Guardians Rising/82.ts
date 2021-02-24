import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Pangoro",
		fr: "Pandarbare",
	},
	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		675,
	],
	hp: 130,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Pancham",
		fr: "Pandespiègle",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sky Uppercut",
				fr: "Stratopercut",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 70,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnum Punch",
				fr: "Poing Magnum",
			},

			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
