import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Dewgong",
	},
	illustrator: "Masako Yamashita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		87,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Seel",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Freezing Breath",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Asleep.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Ice Pillar",
			},
			effect: {
				en: "Until the end of your opponent's next turn, as long as Light Dewgong is your Active Pokémon, prevent all damage done by attacks to your Benched Pokémon. (Any other effects of attacks still happen.)",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
