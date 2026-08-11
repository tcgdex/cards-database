import { Card } from "models/database/card"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "マグマの滝壺"
	},

	illustrator: "ORBITALLINK Inc.",
	category: "Trainer",

	effect: {
		'ja-jp': "おたがいのプレイヤーは、自分の番ごとに1回、自分のトラッシュからエネルギーを1枚選び、自分のベンチのポケモンにつけてよい。その場合、つけたポケモンにダメカンを2個のせる。"
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 606292,
				tcgplayer: 569755,
			},
		},
	],

	trainerType: "Stadium"
}

export default card