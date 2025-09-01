import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "ギャラドス",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [130],
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "ドラゴンクラッシュ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は、防御する各ポケモンに10ダメージを与えます。防御する各ポケモンからエネルギーカードを捨てます。",
			},
		},
		{
			cost: ["Water", "Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "アクアソニック",
			},
			effect: {
				ja: "この攻撃の損傷は、抵抗の影響を受けません。",
			},
			damage: 80,
		},
	],

	retreat: 2,

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
