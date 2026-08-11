import { Card } from "models/database/card"
import Set from "../SVK"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "緊急ボード"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンは、にげるためのエネルギーが1個ぶん少なくなる。そのポケモンの残りHPが「30」以下なら、にげるためのエネルギーは、すべてなくなる。"
	},

	trainerType: "Tool",
	rarity: "None"
}

export default card