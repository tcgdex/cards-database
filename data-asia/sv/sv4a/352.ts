import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ネルケ",
		'zh-tw': "聶凱"
	},

	illustrator: "Taiga Kayama",
	category: "Trainer",

	effect: {
		ja: "相手の手札を見て、その中にあるサポートの枚数×2枚ぶん、自分の山札を引く。",
		'zh-tw': "查看對手的手牌，從自己的牌庫抽出與其中支援者卡的張數×2張相同數量的卡。"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card