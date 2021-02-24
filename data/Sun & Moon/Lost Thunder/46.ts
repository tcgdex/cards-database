import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Démolosse",
	},
	illustrator: "Sekio",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		229,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Houndour",
		fr: "Malosse",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nasty Plot",
				fr: "Machination",
			},
			effect: {
				en: "Search your deck for a card and put it into your hand. Then, shuffle your deck.",
				fr: "Cherchez une carte dans votre deck, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Attack Operation",
				fr: "Opération d’Attaque",
			},
			effect: {
				en: "If you have more cards in your hand than your opponent, this attack does 80 more damage.",
				fr: "Si vous avez plus de cartes dans votre main que votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 50,

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
