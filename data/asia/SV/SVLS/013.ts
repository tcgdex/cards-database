import { Card } from "models/database/card"
import Set from "../SVLS"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ネストボール"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。"
	},

	trainerType: "Item",
	rarity: "None"
}

export default card