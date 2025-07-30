import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
	set: Set,
	name: {
		ja: "スターミー",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [121],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "ウォーターガン",
			},
			effect: {
				ja: "この攻撃は、スターミーに取り付けられた各水エネルギーに対して10ダメージに加えて20のダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で40以上のダメージを追加することはできません。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "コアブラスト",
			},
			effect: {
				ja: "この攻撃は、防御ポケモンに取り付けられた特別なエネルギーカードごとに30のダメージに加えて20ダメージを与えます。",
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
