import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Stadium Gempar",
		'th-th': "เอ็กไซต์สเตเดียม"
	},

	illustrator: "imoniii",
	category: "Trainer",

	effect: {
		'id-id': "HP maksimal semua Pokémon Basic di Arena kedua pemain masing-masing bertambah sejumlah 30.",
		'th-th': "HP สูงสุดของโปเกมอน[พื้นฐาน]บนกระดานของทั้งสองฝ่ายทุกตัว แต่ละตัวจะถูก [+30]"
	},

	trainerType: "Stadium",
	regulationMark: "H"
}

export default card