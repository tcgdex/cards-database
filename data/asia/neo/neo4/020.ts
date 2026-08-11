import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークキラバ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [156],
	hp: 60,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				ja: "焼却します",
			},
			effect: {
				ja: "すべてのプレイヤーに対戦相手のデッキのトップカードを表示します。トレーナーカードの場合は、捨ててください。",
			},
		},
		{
			cost: ["Fire", "Fire"],
			name: {
				ja: "急いでマグマ",
			},
			effect: {
				ja: "デッキのトップ5カードを捨ててください。 （デッキに5枚未満のカードがある場合は、それらすべてを破棄します。）この攻撃は、この方法で廃棄した各火エネルギーカードに対して20のダメージを与えます。",
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
