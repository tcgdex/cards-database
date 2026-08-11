import { Card } from "models/database/card"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ポケモンいれかえ",
		'zh-tw': "寶可夢交替",
		'th-th': "สับเปลี่ยนโปเกมอน"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のバトルポケモンをベンチポケモンと入れ替える。",
		'zh-tw': "將自己的戰鬥寶可夢與備戰寶可夢互換。",
		'th-th': "สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายเรากับโปเกมอนบนเบนช์"
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 734293,
				tcgplayer: 566912,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "G"
}

export default card