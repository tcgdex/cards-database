import { Card } from "models/database/card"
import Set from "../SVK"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ボウルタウン"
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、自分の番ごとに1回、自分の山札からたねポケモン（「ルールを持つポケモン」をのぞく）を1枚選び、ベンチに出してよい。そして山札を切る。"
	},

	trainerType: "Stadium",
	rarity: "None"
}

export default card