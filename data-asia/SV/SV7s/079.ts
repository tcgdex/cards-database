import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โคโจฟู",
		id: "Mienfoo"
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		th: "จะเก็บตัวอยู่กลางป่าลึก หมั่นฝึกตนกันเป็นฝูง ท่าเตะและท่าสับจะต่างกันไปตามฝูง",
		id: "Mienfoo memencil ke pedalaman gunung dan berlatih bersama kawanannya. Bentuk tendangan dan tebasan berbeda-beda tergantung kawanannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ตบร่วง",
			id: "Tumbuk Jatuh"
		},

		effect: {
			th: "เลือกการ์ด 1 ใบจากบนมือฝ่ายตรงข้ามโดยไม่ดูหน้าการ์ด ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Pilih 1 kartu dari Kartu Pegangan lawan tanpa melihat sisi depan, lalu buang ke Trash."
		},

		damage: 10,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card