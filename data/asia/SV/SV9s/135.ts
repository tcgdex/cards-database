import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ปราสาทของ N",
		'id-id': "Istana N"
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'th-th': "พลังงานสำหรับ[หนี]ของ [โปเกมอนของ N] บนกระดานของทั้งสองฝ่ายทุกตัว ทั้งหมดจะหายไป",
		'id-id': "Semua Pokémon N di Arena kedua pemain menjadi tidak membutuhkan Energi untuk Mundur."
	},

	trainerType: "Stadium",
	regulationMark: "I"
}

export default card