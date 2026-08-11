import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "ライチュ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [26],
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "サンダーショック",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 20,
		},
		{
			cost: ["Lightning", "Lightning", "Lightning"],
			name: {
				ja: "落雷",
			},
			effect: {
				ja: "Raichuに取り付けられたすべてのLightningエネルギーカードを捨てることができます。もしそうなら、この攻撃は80のダメージを与えます。",
			},
			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
