import { Card } from "models/database/card"
import Set from "../SVK"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "タウンデパート"
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、自分の番ごとに1回、自分の山札から「ポケモンのどうぐ」を1枚選び、相手に見せて、手札に加えてよい。そして山札を切る。"
	},

	trainerType: "Stadium",
	rarity: "None"
}

export default card