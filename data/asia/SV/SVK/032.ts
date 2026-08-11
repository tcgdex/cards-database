import { Card } from "models/database/card"
import Set from "../SVK"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "スイレンのお世話"
	},

	illustrator: "Atsushi Furusawa",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュからポケモン（「ルールを持つポケモン」をのぞく）と基本エネルギーを合計3枚まで選び、相手に見せて、手札に加える。"
	},

	trainerType: "Supporter",
	rarity: "None"
}

export default card