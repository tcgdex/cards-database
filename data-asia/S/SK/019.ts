import { Card } from "../../../interfaces"
import Set from "../SK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "等級球",
		ja: "レベルボール"
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的牌庫選擇1張HP為「90」以下的寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
		ja: "自分の山札から、HPが「90」以下のポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	trainerType: "Item",
	regulationMark: "E"
}

export default card