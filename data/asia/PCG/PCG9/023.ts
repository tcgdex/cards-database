import { Card } from "models/database/card"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Latios Ex（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [381],
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "リンクウィング",
			},
			effect: {
				'ja-jp': "あなたのラティアス、ラティアスEx、ラティオス、およびラティオスExのそれぞれのリトリートコストは0です。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				'ja-jp': "アイスバリア",
			},
			effect: {
				'ja-jp': "対戦相手の次のターン中に、対戦相手のポケモンエクスがラティオスExに与えたダメージを含む攻撃のすべての影響を防ぎます。",
			},
			damage: 30,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ハイドロスプラッシュ",
			},
			damage: 60,
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
