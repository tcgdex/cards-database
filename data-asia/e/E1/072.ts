import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "ニネタール",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [38],
	hp: 80,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: {
				ja: "誤解を招く",
			},
			effect: {
				ja: "2つのコインをフリップします。それらのいずれかがヘッドである場合、防御するポケモンは今混乱しています。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "エーテルの炎",
			},
			effect: {
				ja: "ニネタールに取り付けられたすべての消防符型カードを廃棄します。この攻撃は、この方法で廃棄された各カードに対して30のダメージと20のダメージをもたらします。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
