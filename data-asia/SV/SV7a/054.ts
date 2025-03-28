import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黑暗球",
		'zh-cn': "黑暗球",
		ja: "ダークボール"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'zh-tw': "查看自己的牌庫下方7張卡，從其中選擇1張寶可夢卡，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。",
		'zh-cn': "查看自己的牌庫下方7張卡，從其中選擇1張寶可夢卡，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。",
		ja: "自分の山札を下から7枚見て、その中からポケモンを1枚選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。"
	},

	trainerType: "Item",
	regulationMark: "H",
	rarity: "Uncommon"
}

export default card