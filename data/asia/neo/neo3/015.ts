import { Card } from "models/database/card"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "qwilfish",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [211],
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "毒物",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "針の嵐",
			},
			effect: {
				'ja-jp': "尾がなくなるまでコインをひっくり返します。この攻撃は、あなたが得るヘッドの数の20倍のダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
