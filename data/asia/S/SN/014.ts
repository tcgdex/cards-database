import { Card } from "models/database/card"
import Set from "../SN"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "傷藥",
		'ja-jp': "きずぐすり"
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		'zh-tw': "選擇自己的1隻寶可夢，恢復「30」HP。",
		'ja-jp': "自分のポケモンを1匹選び、HPを「30」回復する。"
	},

	trainerType: "Item",
	regulationMark: "F"
}

export default card