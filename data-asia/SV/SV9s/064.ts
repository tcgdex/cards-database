import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "อิโนมู",
		id: "Piloswine"
	},

	illustrator: "Aliya Chen",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		th: "ร่างกายปกคลุมด้วยขนยาวและทนทานต่อความหนาวเย็น เขี้ยวน้ำแข็ง จะใหญ่ยิ่งขึ้นเมื่อหิมะตก",
		id: "Ia diselimuti bulu panjang sehingga tahan dingin. Gading esnya akan menjadi makin tebal saat salju turun."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "พลังมหากาฬ",
			id: "Tenaga Super"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			th: "เขี้ยวขวิด",
			id: "Tusukan Taring"
		},

		damage: 50,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card