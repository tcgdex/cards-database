import { Card } from "models/database/card"
import Set from "../PCG7"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "exeggutor（デルタ種）",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [103],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "デルタサークル",
			},
			effect: {
				'ja-jp': "10ダメージに加えて、プレイ中のポケモンごとに10ダメージがあり、そのカードにデルタが付いています。",
			},
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				'ja-jp': "分割爆弾",
			},
			effect: {
				'ja-jp': "対戦相手のポケモンの2つを選択してください。この攻撃は、それぞれに30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
	],

	retreat: 1,

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
