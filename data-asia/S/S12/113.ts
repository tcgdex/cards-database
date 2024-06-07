import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小菘",
		ja: "スズナ"
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		'zh-tw': "查看自己的牌庫上方7張卡，從其中選擇任意數量的【水】寶可夢卡與【水】能量卡，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。",
		ja: "自分の山札を上から7枚見て、その中からポケモンとエネルギーを好きなだけ選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。"
	},

	trainerType: "Supporter",
	regulationMark: "F"
}

export default card