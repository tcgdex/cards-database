import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Gunung Gravitasi",
		'th-th': "กราวิตีเมาน์เทน"
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'id-id': "HP maksimal semua Pokémon Stage 2 di Arena kedua pemain masing-masing berkurang sejumlah 30.",
		'th-th': "HP สูงสุดของโปเกมอน[ร่าง2] บนกระดานของทั้งสองฝ่ายทุกตัว แต่ละตัวจะถูก [-30]"
	},

	trainerType: "Stadium",
	regulationMark: "H"
}

export default card