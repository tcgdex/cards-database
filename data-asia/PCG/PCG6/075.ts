import { Card } from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "メタグロススター",
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [376],
	hp: 90,
	types: ["Metal"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Metal"],
			name: {
				ja: "重要なコレクション",
			},
			effect: {
				ja: "対戦相手が取った賞金の数を数えます。その多くの金属エネルギーカードまで廃棄の山を検索し、それらをMetagross {{star | this Pokemon}}に取り付けます。",
			},
			damage: 10,
		},
		{
			cost: ["Metal", "Metal", "Metal", "Colorless", "Colorless"],
			name: {
				ja: "ハイパービーム",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、防御ポケモンに取り付けられたエネルギーカードを捨てます。",
			},
			damage: 50,
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
