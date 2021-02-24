import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Shinx",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		403,
	],
	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Spark",
			},
			effect: {
				en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
