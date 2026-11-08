import { Card } from "models/database/card"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジャンプラフ-013/092",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [189],
	hp: 70,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				'ja-jp': "綿毛",
			},
			effect: {
				'ja-jp': "相手のターン中、ジャンプラフが対戦相手の攻撃によって損傷または影響を受ける場合、すでに少なくとも1つのダメージカウンターがあり、コインをひっくり返します。頭の場合、その攻撃のすべての影響（損傷を含む）を防ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "コットンパンチ",
			},
			effect: {
				'ja-jp': "2つのコインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},
		},
	],


	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
