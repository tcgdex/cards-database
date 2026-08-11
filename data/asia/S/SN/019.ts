import { Card } from "../../../interfaces"
import Set from "../SN"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "精靈球",
		ja: "モンスターボール"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'zh-tw': "擲1次硬幣若為正面，則從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
		ja: "コインを1回投げオモテなら、自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	trainerType: "Item",
	regulationMark: "F"
}

export default card