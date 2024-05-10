import { Card } from "../../../interfaces"
import Set from "../svAM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "寶可夢交替",
		th: "สับเปลี่ยนโปเกมอน",
		id: "Tukar Pokémon"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'zh-tw': "將自己的戰鬥寶可夢與備戰寶可夢互換。",
		th: "สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายเรากับโปเกมอนบนเบนช์",
		id: "Tukar Pokémon Bertarung sendiri dengan Pokémon Cadangan."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card