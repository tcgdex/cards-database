import { Card } from "models/database/card"
import Set from "../SPD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿馴",
		'ja-jp': "ジュン"
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的牌庫抽出3張卡。",
		'ja-jp': "自分の山札を3枚引く。"
	},

	trainerType: "Supporter",
	regulationMark: "F"
}

export default card