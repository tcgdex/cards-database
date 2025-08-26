import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ブレインのマグマー",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [126],
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				ja: "火の猛烈な",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
			},
		},
		{
			cost: ["Fire", "Fire", "Fire"],
			name: {
				ja: "溶岩バースト",
			},
			effect: {
				ja: "デッキのトップ5カードを捨ててください。 （デッキに5枚未満のカードがある場合は、それらすべてを破棄します。）この攻撃は、この方法で廃棄した各火エネルギーカードに対して20のダメージを与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
