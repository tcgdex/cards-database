import { Card } from "models/database/card"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒットモントップ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [237],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				'ja-jp': "検出する",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、ヒットモントップに行われた損害を含む攻撃のすべての影響を防ぎます。",
			},
		},
		{
			cost: ["Fighting", "Fighting", "Fighting"],
			name: {
				'ja-jp': "トリプルキック",
			},
			effect: {
				'ja-jp': "3コインをフリップします。この攻撃は、ヘッド数の30回のダメージ時間を実行します。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
