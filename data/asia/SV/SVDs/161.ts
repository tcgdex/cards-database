import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "คำสั่งของบอส (เกซิส)",
		'id-id': "Perintah Bos (Ghetsis)"
	},

	illustrator: "NC Empire",
	category: "Trainer",

	effect: {
		'th-th': "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้",
		'id-id': "Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card