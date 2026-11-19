import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "ナタネの活気",
		'zh-tw': "菜種的活力"
	},

	illustrator: "Yuu Nishida",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。その後、自分の手札から{G}エネルギーを2枚まで選び、ベンチポケモン1匹につける。",
		'zh-tw': "從自己的牌庫抽出2張卡。然後，從自己的手牌選擇最多2張【草】能量卡，附於1隻備戰寶可夢身上。"
	},

	trainerType: "Supporter",
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651033,
				tcgplayer: 569820,
				cardtrader: 234203,
			},
		},
	]
}

export default card