import { Card } from "models/database/card"
import Set from "../SVK"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "キャプチャーアロマ"
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		'ja-jp': "コインを1回投げる。オモテなら進化ポケモン、ウラならたねポケモンを自分の山札から1枚選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	trainerType: "Item",
	rarity: "None"
}

export default card