import { Card } from "models/database/card"
import Set from "../SVLN"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "プレシャスキャリー"
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札からたねポケモンを好きなだけ選び、ベンチに出す。そして山札を切る。"
	},

	trainerType: "Item",
	rarity: "None"
}

export default card