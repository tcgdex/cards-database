import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Togetic",
		fr: "Togetic",
	},
	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		176,
	],
	hp: 80,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Togepi",
		fr: "Togepi",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Present",
				fr: "Cadeau d’Énergie",
			},
			effect: {
				en: "Attach an Energy card from your hand to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie de votre main à l’un de vos Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Magical Shot",
				fr: "Coup Magique",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
