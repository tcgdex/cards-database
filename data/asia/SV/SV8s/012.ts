import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Capsakid",
		'th-th': "แคปไซจิ"
	},

	illustrator: "Julie Hang",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'id-id': "Rasa masakan khas Paldea sangat pedas karena dibuat menggunakan gigi depan Capsakid yang lepas.",
		'th-th': "อาหารท้องถิ่นของพัลเดียมีรสชาติเผ็ดมาก เพราะใช้ฟันหน้าที่ร่วงหล่น ของแคปไซจิเป็นวัตถุดิบ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Sundulan Meloncat",
			'th-th': "กระโดดโหม่ง"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card