import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		122,
	],
	hp: 80,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Mimic",
				fr: "Copie",
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw a number of cards equal to the number of cards in your opponent's hand.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez un nombre de cartes égal au nombre de cartes dans la main de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Juggling",
				fr: "Jonglerie",
			},
			effect: {
				en: "Flip 4 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 20,

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
