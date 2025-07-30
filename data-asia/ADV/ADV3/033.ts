import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "砂利",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [75],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "粉砕",
			},
			effect: {
				ja: "砂利に付随するエネルギーの量を10回損傷します。",
			},
		},
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				ja: "大きな爆発",
			},
			effect: {
				ja: "各アクティブなポケモン（あなたと相手の両方）に80のダメージを与えます。",
			},
		},
	],

	retreat: 3,

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
