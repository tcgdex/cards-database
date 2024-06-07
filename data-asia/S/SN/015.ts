import { Card } from "../../../interfaces"
import Set from "../SN"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超級球",
		ja: "スーパーボール"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'zh-tw': "查看自己的牌庫上方7張卡。選擇其中1張寶可夢卡，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。",
		ja: "自分の山札を上から7枚見る。その中からポケモンを1枚選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。"
	},

	trainerType: "Item",
	regulationMark: "F"
}

export default card