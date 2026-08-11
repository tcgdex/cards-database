import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Voltorb",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [100],
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "サイコウェーブ",
			},
			effect: {
				'ja-jp': "Voltorbに取り付けられたエネルギーカードを廃棄します。防御ポケモンは今混乱しています。",
			},
		},
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "サンダーウェーブ",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
