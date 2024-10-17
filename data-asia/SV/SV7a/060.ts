import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "杜若",
		'zh-cn': "杜若",
		ja: "カキツバタ"
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		'zh-tw': "查看自己的牌庫上方7張卡，從其中選擇寶可夢卡與訓練家卡各1張，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。",
		'zh-cn': "查看自己的牌庫上方7張卡，從其中選擇寶可夢卡與訓練家卡各1張，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。",
		ja: "自分の山札を上から7枚見て、その中からポケモンとトレーナーズを1枚ずつ選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。"
	},

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Uncommon"
}

export default card