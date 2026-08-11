import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヘラクロス",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [214],
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "地殻",
			},
			effect: {
				'ja-jp': "対戦相手の基本的なポカンからの攻撃によってヘラクロスに与えられた損害は、20（脱力感と抵抗を適用した後）に20倍に減少します。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "取得します",
			},
			effect: {
				'ja-jp': "対戦相手よりも多くの賞品が残っている場合、この攻撃は20のダメージに加えて、各賞カードに10件のダメージが多く、対戦相手よりも多くのダメージを与えます。",
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
