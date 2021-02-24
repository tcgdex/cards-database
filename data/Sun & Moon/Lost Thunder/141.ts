import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Gardevoir",
		fr: "Gardevoir",
	},
	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		282,
	],
	hp: 130,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Brilliant Search",
				fr: "Recherche Brillante",
			},
			effect: {
				en: "Search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 3 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sensitive Ray",
				fr: "Rayon Sensible",
			},
			effect: {
				en: "If you played a Supporter card from your hand during this turn, this attack does 90 more damage.",
				fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 70,

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
	retreat: 2,



}

export default card
