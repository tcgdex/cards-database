import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "テンタクルエル",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [73],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "長い触手",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。尾の場合、防御ポケモンに取り付けられたエネルギーカードを捨てます。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "有毒",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。ターンの間に防御ポケモンに1つではなく2つのダメージカウンターを置きます。",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
