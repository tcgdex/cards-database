import { Card } from "models/database/card"
import Set from "../SVAW"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "寶可夢交替",
		'th-th': "สับเปลี่ยนโปเกมอน",
		'id-id': "Tukar Pokémon"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'zh-tw': "將自己的戰鬥寶可夢與備戰寶可夢互換。",
		'th-th': "สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายเรากับโปเกมอนบนเบนช์",
		'id-id': "Tukar Pokémon Bertarung sendiri dengan Pokémon Cadangan."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card