import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "สับเปลี่ยนโปเกมอน[ไอเท็ม]",
		'id-id': "Tukar Pokémon"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'th-th': "สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายเรากับโปเกมอนบนเบนช์",
		'id-id': "Tukar Pokémon Bertarung sendiri dengan Pokémon Cadangan."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card