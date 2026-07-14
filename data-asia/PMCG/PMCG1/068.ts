import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		// Chansey
		ja: "ラッキー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [113],
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "スクランチ",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合、対戦相手の次のターン中に、攻撃によってこのポケモンに与えられたすべてのダメージを防ぎます。",
			},

		},
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ダブルエッジ",
			},
			effect: {
				ja: "このポケモンは、それ自体に80のダメージを与えます。",
			},
			damage: 80,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 575603
			},
		},
		{
			type: "holo",
			subtype: "no-rarity",
			thirdParty: {
				tcgplayer: 577030
			},
		},
	],
};

export default card
