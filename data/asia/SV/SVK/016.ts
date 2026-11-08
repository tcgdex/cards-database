import { Card } from "models/database/card"
import Set from "../SVK"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ダークパッチ"
	},

	illustrator: "Ryo Ueda",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュから「基本エネルギー」を1枚選び、ベンチのポケモンにつける。"
	},

	trainerType: "Item",
	rarity: "None"
}

export default card