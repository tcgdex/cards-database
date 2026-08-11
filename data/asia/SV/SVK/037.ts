import { Card } from "models/database/card"
import Set from "../SVK"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "フトゥー博士のシナリオ"
	},

	illustrator: "hncl",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の場のポケモンを1匹選び、手札にもどす。（ポケモン以外のカードは、すべてトラッシュする。）"
	},

	trainerType: "Supporter",
	rarity: "None"
}

export default card