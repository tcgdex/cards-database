import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "ブルーノのマチャンプ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [68],
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				ja: "ダブルラリアット",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の50回のダメージ時間を実行します。",
			},
		},
	],

	retreat: 3,

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
