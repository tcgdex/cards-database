import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "衝浪手",
		'zh-cn': "衝浪手",
		ja: "サーファー"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'zh-tw': "將自己的戰鬥寶可夢與備戰寶可夢互換。然後，從牌庫抽卡直到自己的手牌滿5張為止。",
		'zh-cn': "將自己的戰鬥寶可夢與備戰寶可夢互換。然後，從牌庫抽卡直到自己的手牌滿5張為止。",
		ja: "自分のバトルポケモンをベンチポケモンと入れ替える。その後、自分の手札が5枚になるように、山札を引く。"
	},

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Uncommon"
}

export default card