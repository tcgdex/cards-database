import { Card } from "models/database/card"
import Set from "../SLD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "老大的指令（赤日）",
		'ja-jp': "ボスの指令（アカギ）"
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
		'ja-jp': "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
	},

	trainerType: "Supporter",
	regulationMark: "F"
}

export default card