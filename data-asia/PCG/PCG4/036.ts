import { Card } from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "フラフィー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [180],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "サンダーウェーブ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Colorless", "Colorless"],
			name: {
				ja: "雷",
			},
			effect: {
				ja: "Flaaffyはそれ自体に10ダメージを与えます。",
			},
			damage: 50,
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
