import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Poliwag",
		fr: "Ptitard",
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		60,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Round 'n' Round",
				fr: "Tourne-Tourne",
			},
			effect: {
				en: "You can use this Ability only if you go second. Once during your first turn (before your attack), you may leave your opponent's Active Pokémon Confused.",
				fr: "Vous ne pouvez utiliser ce talent que si vous jouez en second. Une seule fois pendant votre premier tour (avant votre attaque), vous pouvez laisser le Pokémon Actif de votre adversaire Confus.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Watering",
				fr: "Arrosage",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
