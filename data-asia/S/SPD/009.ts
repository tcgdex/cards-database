import { Card } from "../../../interfaces"
import Set from "../SPD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "霧之水晶",
		ja: "霧の水晶"
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的牌庫選擇1張【超】屬性的【基礎】寶可夢卡或者【超】能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
		ja: "自分の山札からタイプのたねポケモンまたはエネルギーを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	trainerType: "Item",
	regulationMark: "E"
}

export default card