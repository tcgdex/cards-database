import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "トレッキングシューズ",
		'zh-tw': "健行鞋"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から1枚見て、そのカードを手札に加える。または、そのカードをトラッシュし、自分の山札を1枚引く。",
		'zh-tw': "查看自己的牌庫上方1張卡，將那張卡加入手牌。或者將那張卡丟棄，從自己的牌庫抽出1張卡。"
	},

	trainerType: "Item",
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651029,
				tcgplayer: 569816,
				cardtrader: 234199,
			},
		},
	]
}

export default card