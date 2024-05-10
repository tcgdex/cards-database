import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "グルーシャ",
		'zh-tw': "古魯夏"
	},

	illustrator: "GIDORA",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の手札が5枚になるように、山札を引く。自分の場のポケモンにエネルギーが1枚もついていないなら、7枚になるように引く。",
		'zh-tw': "從牌庫抽卡直到自己的手牌滿5張為止。若自己的場上寶可夢身上1張能量卡都沒有附加，則抽卡直到滿7張為止。"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card