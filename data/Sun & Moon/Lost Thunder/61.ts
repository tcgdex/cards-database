import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Cubchoo",
		fr: "Polarhume",
	},
	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		613,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Secondary Chills",
				fr: "Tremblements Secondaires",
			},
			effect: {
				en: "You can use this attack only if you go second, and only on your first turn. Your opponent's Active Pokémon is now Paralyzed.",
				fr: "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Beat",
				fr: "Bataille",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
