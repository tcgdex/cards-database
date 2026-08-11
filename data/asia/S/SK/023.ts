import { Card } from "models/database/card"
import Set from "../SK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "可爾妮的氣勢",
		'ja-jp': "コルニの気合い"
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		'zh-tw': "從牌庫抽卡直到自己的手牌滿6張為止。",
		'ja-jp': "自分の手札が6枚になるように、山札を引く。"
	},

	trainerType: "Supporter",
	regulationMark: "E"
}

export default card