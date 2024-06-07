import { Card } from "../../../interfaces"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ポケモンいれかえ",
		'zh-tw': "寶可夢交替",
		th: "สับเปลี่ยนโปเกมอน"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンをベンチポケモンと入れ替える。",
		'zh-tw': "將自己的戰鬥寶可夢與備戰寶可夢互換。",
		th: "สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายเรากับโปเกมอนบนเบนช์"
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card