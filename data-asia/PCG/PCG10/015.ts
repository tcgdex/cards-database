import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "Vaporeon Star",
	},


	category: "Pokemon",
	dexId: [134],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "ブルーレイ",
			},
			effect: {
				ja: "ターン中に、Vaporeon {{star | thispokã©mon}}を手からベンチに置くと、各アクティブなPokã©Mon（あなたと相手の両方）からすべての特別な条件と3つのダメージカウンターを削除できます。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				ja: "渦",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、防御ポケモンに取り付けられたエネルギーカードを捨てます。",
			},
			damage: 40,
		},
	],

	retreat: 1,

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
