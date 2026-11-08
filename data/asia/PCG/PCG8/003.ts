import { Card } from "models/database/card"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "金星",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [3],
	hp: 110,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "クロロフィル",
			},
			effect: {
				'ja-jp': "草に取り付けられた無色のエネルギーのみを提供するすべてのエネルギーカードは、代わりに草のエネルギーを提供します。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "グリーンブラスト",
			},
			effect: {
				'ja-jp': "すべてのポケモンに取り付けられた各草のエネルギーに対して20のダメージと10ダメージがさらに10ダメージを与えます。",
			},
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				'ja-jp': "有毒な睡眠",
			},
			effect: {
				'ja-jp': "防御するポケモンは今眠っていて毒されています。ターンの間に防御ポケモンに1つではなく2つのダメージカウンターを置きます。",
			},
		},
	],

	retreat: 3,

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
