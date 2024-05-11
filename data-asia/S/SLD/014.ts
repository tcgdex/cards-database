import { Card } from "../../../interfaces"
import Set from "../SLD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "寶可齒輪3.0",
		ja: "ポケギア3.0"
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		'zh-tw': "查看自己的牌庫上方7張卡。選擇其中1張支援者卡，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。",
		ja: "自分の山札を上から7枚見る。その中からサポートを1枚選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。"
	},

	trainerType: "Item",
	regulationMark: "D"
}

export default card