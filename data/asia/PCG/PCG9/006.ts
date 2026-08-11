import { Card } from "models/database/card"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "quagsire（デルタ種）",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [195],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "掘り下げます",
			},
			effect: {
				'ja-jp': "ターン中に、手からquagsireをプレイしてポカンの1つを進化させると、最大2つのポカンツールカードを廃棄パイルを検索し、相手に見せて、手に渡すことができます。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ポンプアウト",
			},
			effect: {
				'ja-jp': "Quagsireにポケモンツールカードが接続されている場合、この攻撃は50のダメージと20ダメージを与えます。",
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
