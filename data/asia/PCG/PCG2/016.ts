import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マグカルゴ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [219],
	hp: 80,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "滑らかに",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前に）一度、デッキをカードで検索することができます。デッキをシャッフルしてから、そのカードをデッキの上に置きます。 Magcargoが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "ノックオーバー",
			},
			effect: {
				'ja-jp': "プレイ中のスタジアムカードを捨てることができます。",
			},
			damage: 10,
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				'ja-jp': "燃焼",
			},
			damage: 50,
		},
	],

	retreat: 3,

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
