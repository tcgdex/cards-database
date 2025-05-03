import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Capsakid",
		th: "แคปไซจิ"
	},

	illustrator: "Julie Hang",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		id: "Rasa masakan khas Paldea sangat pedas karena dibuat menggunakan gigi depan Capsakid yang lepas.",
		th: "อาหารท้องถิ่นของพัลเดียมีรสชาติเผ็ดมาก เพราะใช้ฟันหน้าที่ร่วงหล่น ของแคปไซจิเป็นวัตถุดิบ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Sundulan Meloncat",
			th: "กระโดดโหม่ง"
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