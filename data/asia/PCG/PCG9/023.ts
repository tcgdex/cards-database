import { Card } from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		ja: "Latios Ex（デルタ種）",
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
				ja: "リンクウィング",
			},
			effect: {
				ja: "あなたのラティアス、ラティアスEx、ラティオス、およびラティオスExのそれぞれのリトリートコストは0です。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "アイスバリア",
			},
			effect: {
				ja: "対戦相手の次のターン中に、対戦相手のポケモンエクスがラティオスExに与えたダメージを含む攻撃のすべての影響を防ぎます。",
			},
			damage: 30,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "ハイドロスプラッシュ",
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
