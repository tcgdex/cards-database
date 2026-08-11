import { Card } from "models/database/card"
import Set from "../SLD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "博士的研究（山梨博士）",
		'ja-jp': "博士の研究（ナナカマド博士）"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'zh-tw': "將自己的手牌全部丟棄，從牌庫抽出7張卡。",
		'ja-jp': "自分の手札をすべてトラッシュし、山札を7枚引く。"
	},

	trainerType: "Supporter",
	regulationMark: "F"
}

export default card