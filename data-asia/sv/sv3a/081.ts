import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "アオキ",
		'zh-tw': "青木"
	},

	illustrator: "Akira Komayama",
	category: "Trainer",

	effect: {
		ja: "コインを1回投げる。オモテならポケモンを2枚まで、ウラならたねポケモンを1枚、自分の山札から選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "擲1次硬幣。若為正面則從自己的牌庫選擇最多2張寶可夢卡，若為反面則選擇1張【基礎】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card