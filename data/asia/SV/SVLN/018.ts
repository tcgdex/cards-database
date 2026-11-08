import { Card } from "models/database/card"
import Set from "../SVLN"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "アカマツ"
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札から、それぞれちがうタイプの基本エネルギーを2枚まで選び、相手に見せて、どちらか1枚を手札に加え、残りのエネルギーを自分のポケモンにつける。そして山札を切る。"
	},

	trainerType: "Supporter",
	rarity: "None"
}

export default card