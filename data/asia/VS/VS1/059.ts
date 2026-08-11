import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "エリカのベロッソム",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [182],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "フラワーカッター",
			},
			effect: {
				ja: "3コインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
		},
	],
};

export default card
