import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Durant",
		fr: "Fermite",
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Bite Together",
				fr: "Morsure Commune",
			},
			effect: {
				en: "If Durant is on your Bench, this attack does 60 more damage.",
				fr: "Si Fermite est sur votre Banc, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: "30+",

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
