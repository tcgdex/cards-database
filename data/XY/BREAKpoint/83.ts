import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Togekiss EX",
		fr: "Togekiss-EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		468,
	],
	hp: 170,
	types: [
		"Fairy",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Mighty Wind",
				fr: "Vent Redoutable",
			},
			effect: {
				en: "You may attach an Energy card from your hand to 1 of your Benched Pokémon.",
				fr: "Vous pouvez attacher une carte Énergie de votre main à l'un de vos Pokémon de Banc.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hurricane Wing",
				fr: "Tornad'Aile",
			},
			effect: {
				en: "Flip 4 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "50×",

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
