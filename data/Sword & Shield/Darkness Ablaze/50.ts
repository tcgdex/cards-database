import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Wishiwashi",
		fr: "Froussardine"
	},
	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 30,
	types: [
		"Water",
	],




	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Deep Sea Swirl",
				fr: "Remous Abyssal"
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw 8 cards.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez 8 cartes."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse Vague"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
