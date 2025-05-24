import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火箭隊的雅典娜",
		'zh-cn': "火箭隊的雅典娜",
		ja: "ロケット団のアテナ"
	},

	illustrator: "hncl",
	category: "Trainer",

	effect: {
		'zh-tw': "從牌庫抽卡直到自己的手牌滿5張為止。若自己的所有場上寶可夢皆為「火箭隊的寶可夢」，則抽卡直到滿8張為止。",
		'zh-cn': "從牌庫抽卡直到自己的手牌滿5張為止。若自己的所有場上寶可夢皆為「火箭隊的寶可夢」，則抽卡直到滿8張為止。",
		ja: "自分の手札が5枚になるように、山札を引く。自分の場のポケモン全員が「ロケット団のポケモン」なら、8枚になるように引く。"
	},

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon"
}

export default card