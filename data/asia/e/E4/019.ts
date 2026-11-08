import { Card } from "models/database/card"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マグカルゴ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [219],
	hp: 80,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "噴火",
			},
			effect: {
				'ja-jp': "各プレイヤーは、デッキの一番上のカードを捨てます。この攻撃は、この方法で破棄された各火災エネルギーカードに対して20のダメージと20のダメージをもたらします。",
			},
		},
		{
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			name: {
				'ja-jp': "火の流れ",
			},
			effect: {
				'ja-jp': "この攻撃を使用するために、Magcargoに取り付けられた消防エネルギーカードを廃棄します。対戦相手がベンチでポケモンを持っている場合、この攻撃はそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
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
