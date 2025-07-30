import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "Magcargo Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [219],
	hp: 100,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				ja: "溶けた山",
			},
			effect: {
				ja: "デッキからトップカードを捨ててください。そのカードが基本的なエネルギーカードの場合は、Magcargo Exに添付してください。",
			},
			damage: 20,
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				ja: "溶岩流",
			},
			effect: {
				ja: "この攻撃を使用すると、Magcargo Exに接続された基本エネルギーカードを廃棄できます。そうした場合、この攻撃は40ダメージに加えて、廃棄した基本エネルギーカードごとに20ダメージを与えます。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};
