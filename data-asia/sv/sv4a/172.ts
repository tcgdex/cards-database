import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "クラベル",
		'zh-tw': "克拉韋爾"
	},

	illustrator: "Hitoshi Ariga",
	category: "Trainer",

	effect: {
		ja: "自分の山札から、HPが「120」以下のたねポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇最多3張HP為「120」以下的【基礎】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card