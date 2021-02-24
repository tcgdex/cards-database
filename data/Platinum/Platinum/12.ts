import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Palkia G",
		fr: "Palkia ",
	},
	illustrator: "Yusuke Ishikawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		484,
	],
	hp: 100,
	types: [
		"Water",
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Splashing Turn",
				fr: "Tour éclaboussant",
			},
			effect: {
				en: "You may switch Palkia with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger Palkia  avec 1 de vos Pokémon de Banc.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pearl Breath",
				fr: "Haleine de perle",
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
