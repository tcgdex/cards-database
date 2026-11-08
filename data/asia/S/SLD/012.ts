import { Card } from "models/database/card"
import Set from "../SLD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "暗黑修正檔",
		'ja-jp': "ダークパッチ"
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的棄牌區選擇1張「基本【惡】能量」卡，附於備戰區的【惡】寶可夢身上。",
		'ja-jp': "自分のトラッシュから「基本エネルギー」を1枚選び、ベンチのポケモンにつける。"
	},

	trainerType: "Item",
	regulationMark: "F"
}

export default card