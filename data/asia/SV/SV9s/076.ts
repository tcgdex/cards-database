import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "กาเคกานิ",
		id: "Klawf"
	},

	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		th: "ยืนกลับหัวและเล็งเหยื่อจากยอดหน้าผา แต่ไม่สามารถเล็งได้นาน เพราะเลือดลงหัว",
		id: "Klawf mengincar mangsanya dengan bergantung secara terbalik dari atas tebing, tetapi tidak akan bertahan lama karena darah mengalir ke kepalanya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ก้ามตัดฉับ",
			id: "Capit Penggunting"
		},

		effect: {
			th: "ทอยเหรียญ 2 ครั้ง เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่าย ตรงข้าม ตามจำนวนครั้งที่ออกหัว ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Lempar koin 2 kali. Pilih Energi yang dikenakan pada Pokémon Bertarung lawan untuk tiap lemparan dengan hasil sisi depan, lalu buang ke Trash."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "ตบหนัก",
			id: "Hantaman Penuh Tenaga"
		},

		damage: 100,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card