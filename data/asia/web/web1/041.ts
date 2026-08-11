import { Card } from "models/database/card"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "暗い金星",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [3],
	hp: 70,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				'ja-jp': "恐ろしい花粉",
			},
			effect: {
				'ja-jp': "防御するポケモンは、ランダムに眠り、毒され、混乱し、毒され、麻痺して毒されています。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
