import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ถ้ำศิลา",
		'id-id': "Gua Granit"
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'th-th': "แดเมจของท่าต่อสู้ที่ [โปเกมอนของไดโกะ] ของทั้งสองฝ่ายทุกตัว จะได้รับ จากโปเกมอนฝ่ายตรงข้ามจะถูก [-30]",
		'id-id': "Kerusakan akibat serangan dari Pokémon lawan yang diterima semua Pokémon Steven kedua pemain berkurang sejumlah 30."
	},

	trainerType: "Stadium",
	regulationMark: "I"
}

export default card