import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Golurk",
		fr: "Golemastoc",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		623,
	],
	hp: 140,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Golett",
		fr: "Gringolem",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Rock Tumble",
				fr: "Roule-Pierre",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fist of Antiquity",
				fr: "Poing d’Antiquité",
			},
			effect: {
				en: "If you have any Supporter cards in your discard pile, this attack does nothing.",
				fr: "Si vous avez une carte Supporter dans votre pile de défausse, cette attaque ne fait rien.",
			},
			damage: 160,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
