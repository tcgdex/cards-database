import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Obat Rahasia Naga",
		'th-th': "ยาลับของมังกร"
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'id-id': "Pulihkan HP Pokémon {Naga} di Arena Bertarung sendiri sejumlah 60.",
		'th-th': "ฟื้นฟู HP ของโปเกมอน[มังกร]บนตำแหน่งต่อสู้ฝ่ายเรา [60]"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card