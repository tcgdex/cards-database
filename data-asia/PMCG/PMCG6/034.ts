import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ブレインのアルカニン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [59],
	hp: 90,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				ja: "ヒートタックル",
			},
			effect: {
				ja: "ブレインのアルカニンは、それ自体に10ダメージを与えます。",
			},
			damage: 40,
		},
		{
			cost: ["Fire", "Fire", "Fire", "Fire"],
			name: {
				ja: "ファイアストーム",
			},
			effect: {
				ja: "この攻撃を使用するために、ブレインのアルカニンに取り付けられた3つのファイアエネルギーカードを捨てます。",
			},
			damage: 120,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
