import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "Salamence Ex",
	},


	category: "Pokemon",
	dexId: [373],
	hp: 160,
	types: ["Colorless"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			name: {
				ja: "火山火炎",
			},
			effect: {
				ja: "デッキからトップ5カードを捨ててください。",
			},
			damage: 150,
		},
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				ja: "ハイドロウェーブ",
			},
			effect: {
				ja: "Salamence Exに取り付けられたすべての水エネルギーを捨てます。この攻撃は、相手のベンチポケモンのそれぞれに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
