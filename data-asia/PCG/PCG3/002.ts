import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "Zubat",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [41],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "暗い縞",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御する各ポケモンは現在麻痺しています。",
			},
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "待ち伏せ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。",
			},
		},
	],

	retreat: 1,

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
