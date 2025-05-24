import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "MCの盛り上げ",
		'zh-tw': "主持人的帶動",
		'zh-cn': "主持人的帶動"
	},

	illustrator: "Cona Nitanda",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。相手のサイドの残り枚数が3枚以下なら、さらに2枚引く。",
		'zh-tw': "從自己的牌庫抽出2張卡。若對手剩餘獎賞卡的張數為3張以下，則再抽出2張卡。",
		'zh-cn': "從自己的牌庫抽出2張卡。若對手剩餘獎賞卡的張數為3張以下，則再抽出2張卡。"
	},

	trainerType: "Supporter",
	regulationMark: "I"
}

export default card