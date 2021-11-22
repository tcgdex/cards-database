import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Kabutops ex",
		fr: "Kabutops ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		141,
	],
	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Kabuto",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hyrdocutter",
				fr: "Hydro-lame"
			},
			effect: {
				en: "Flip a number of coins equal to the amount of Energy attached to Kabutops ex. This attack does 40 damage times the number of heads. You can't flip more than 3 coins in this way.",
				fr: "Lancez autant de pièces qu'il y a de cartes Énergie attachées à Kabutops ex. Cette attaque inflige 40 dégâts multipliés par le nombre de face. Vous ne pouvez pas lancer plus de trois pièces."
			},
			damage: "40×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spiral Drain",
				fr: "Spirale épuisante"
			},
			effect: {
				en: "Remove 2 damage counters from Kabutops ex (remove 1 if there is only 1).",
				fr: "Retirez à Kabutops deux marqueurs de dégât (ou un s'il n'y en a qu'un)."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
