import { Card } from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "Kyogre Star",
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [382],
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "重要なコレクション",
			},
			effect: {
				ja: "対戦相手が取った賞金の数を数えます。その多くの水エネルギーカードまで廃棄の山を検索し、それらをkyogre {{star | this pokemon}}に取り付けます。",
			},
			damage: 10,
		},
		{
			cost: ["Water", "Water", "Water", "Colorless", "Colorless"],
			name: {
				ja: "寒い",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御する各ポケモンは、相手の次のターン中に攻撃することはできません。",
			},
			damage: 60,
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
