import { Card } from "models/database/card"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タンゲラ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [114],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "スタン胞子",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				'ja-jp': "ポイズンホイップ",
			},
			effect: {
				'ja-jp': "防御ポケモンは現在中毒になっています。",
			},
			damage: 10,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
