import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サンフロラ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [192],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "まばゆいばかりのダンス",
			},
			effect: {
				'ja-jp': "防御するポケモンはそれぞれ混乱しています。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "グリーンブラスト",
			},
			effect: {
				'ja-jp': "すべてのポケモンに取り付けられた各草のエネルギーに対して20のダメージと10ダメージがさらに10ダメージを与えます。",
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
