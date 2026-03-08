import { Card } from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "グルードンスター",
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [383],
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "重要なコレクション",
			},
			effect: {
				ja: "対戦相手が取った賞金の数を数えます。その多くのファイティングエネルギーカードまで廃棄の山を検索し、Groudon {{Star | This Pokemon}}にそれらを取り付けます。",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				ja: "グラウンドスラッシュ",
			},
			effect: {
				ja: "Groudon {{star | this Pokemon}}に取り付けられたファイティングエネルギーカードを捨てます。",
			},
			damage: 80,
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

export default card
