import { Card } from "models/database/card"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ポケモンいれかえ",
		'zh-tw': "寶可夢交替",
		'zh-cn': "寶可夢交替"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のバトルポケモンをベンチポケモンと入れ替える。",
		'zh-tw': "將自己的戰鬥寶可夢與備戰寶可夢互換。",
		'zh-cn': "將自己的戰鬥寶可夢與備戰寶可夢互換。"
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card