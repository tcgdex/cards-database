import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "種子",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [273],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "成長が急上昇します",
			},
			effect: {
				ja: "手からsedeotに草のエネルギーカードを取り付けます。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "旅をします",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
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
