import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Simisear",
		fr: "Flamoutan",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		514,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Pansear",
		fr: "Flamajou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Water Fling",
				fr: "Dégommage Eau",
			},
			effect: {
				en: "Put 3 Water Energy cards from your discard pile into your hand.",
				fr: "Prenez 3 cartes Énergie Water dans votre pile de défausse et ajoutez-les à votre main.",
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
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
