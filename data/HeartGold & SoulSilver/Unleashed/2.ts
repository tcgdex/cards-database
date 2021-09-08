import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Magmortar",
		fr: "Maganon",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		467,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Magmar",
		fr: "Magmar",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hard Crush",
				fr: "Écras’dur",
			},
			effect: {
				en: "Discard the top 3 cards from your deck. This attack does 50 damage times the number of Energy cards you discarded.",
				fr: "Défaussez les 3 cartes du dessus de votre deck. Cette attaque inflige 50 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
			},
			damage: "50×",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mantle Bazooka",
				fr: "Bazoocape",
			},
			effect: {
				en: "Discard 2 Fire Energy attached to Magmortar.",
				fr: "Défaussez 2 cartes Énergie Fire attachées à Maganon.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
