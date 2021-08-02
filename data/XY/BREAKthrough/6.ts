import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Simisage",
		fr: "Feuiloutan",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		512,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Pansage",
		fr: "Feuillajou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fire Fling",
				fr: "Dégommage Feu",
			},
			effect: {
				en: "Put 3 Fire Energy cards from your discard pile into your hand.",
				fr: "Prenez 3 cartes Énergie Fire dans votre pile de défausse et ajoutez-les à votre main.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hand Fling",
				fr: "Catapu-Main",
			},
			effect: {
				en: "This attack does 10 damage times the number of cards in your hand.",
				fr: "Cette attaque inflige 10 dégâts multipliés par le nombre de cartes dans votre main.",
			},
			damage: "10×",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
