import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Audino",
		fr: "Nanméouïe",
	},
	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		531,
	],
	hp: 90,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Do the Wave",
				fr: "Faites la Vague",
			},
			effect: {
				en: "Does 10 damage times the number of your Benched Pokémon.",
				fr: "Inflige 10 dégâts multipliés par le nombre de vos Pokémon de Banc.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
