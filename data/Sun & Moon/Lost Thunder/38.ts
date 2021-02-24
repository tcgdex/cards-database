import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Moltres",
		fr: "Sulfura",
	},
	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		146,
	],
	hp: 120,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Assisting Heater",
				fr: "Assistant Thermique",
			},
			effect: {
				en: "You may attach a Fire Energy card from your hand to 1 of your Benched Pokémon.",
				fr: "Vous pouvez attacher une carte Énergie Fire de votre main à l’un de vos Pokémon de Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Wing",
				fr: "Aile de Feu",
			},

			damage: 90,

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
