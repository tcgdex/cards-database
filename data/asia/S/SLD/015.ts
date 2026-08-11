import { Card } from "models/database/card"
import Set from "../SLD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "寶可夢交替",
		'ja-jp': "ポケモンいれかえ"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'zh-tw': "將自己的戰鬥寶可夢與備戰寶可夢互換。",
		'ja-jp': "自分のバトルポケモンをベンチポケモンと入れ替える。"
	},

	trainerType: "Item",
	regulationMark: "F"
}

export default card