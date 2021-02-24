import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Salazzle",
		fr: "Malamandre",
	},
	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		758,
	],
	hp: 100,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Salandit",
		fr: "Tritox",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Roast Reveal",
				fr: "Rôtir",
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a Fire Energy card from your hand. If you do, draw 3 cards.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte Énergie Fire de votre main. Dans ce cas, piochez 3 cartes.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
			},

			damage: 60,

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
