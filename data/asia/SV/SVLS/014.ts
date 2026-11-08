import { Card } from "models/database/card"
import Set from "../SVLS"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パーフェクトミキサー"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札から好きなカードを5枚まで選び、トラッシュする。そして山札を切る。"
	},

	trainerType: "Item",
	rarity: "None"
}

export default card