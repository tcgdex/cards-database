import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "staryu",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [120],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "奇襲",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 20,
		},
		{
			cost: ["Water"],
			name: {
				'ja-jp': "回復する",
			},
			effect: {
				'ja-jp': "Staryuに取り付けられた水エネルギーカードを廃棄し、Staryuから4つのダメージカウンターを削除します（すべてが4未満の場合）。",
			},
		},
	],

	retreat: 1,

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
