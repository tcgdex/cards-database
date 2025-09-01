import { Card } from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "ビブラバ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [329],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "ラム",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Lightning", "Colorless"],
			name: {
				ja: "ドラゴンブース",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 60,
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
