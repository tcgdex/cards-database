import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "ビブラバ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [329],
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "クイックチャージ",
			},
			effect: {
				ja: "デッキを検索して、最大3種類の基本エネルギーカードを検索し、相手に見せて、手に入れてください。その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Grass", "Lightning"],
			name: {
				ja: "ドラゴンスパーク",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は相手の各ポケモンに20のダメージを与えます。 （ベンチ付きポケモンに弱さや抵抗を適用しないでください。）",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
