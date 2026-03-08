import { Card } from "../../../interfaces"
import Set from "../E3"

const card: Card = {
	set: Set,
	name: {
		ja: "タンゲラ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [114],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "くすぐるブドウ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中に攻撃することはできません。",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "ダブルキック",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
