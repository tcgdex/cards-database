import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "จิจีลอน",
		'id-id': "Drampa"
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		'th-th': "ใจดีและเชื่องแต่ถ้าโกรธขึ้นมาสักครั้ง มันจะพัดลมแรง ๆ โค่นทุกอย่างล้มทลาย",
		'id-id': "Drampa bersahabat dan hatinya lemah lembut, tapi jika dibuat marah, Pokémon ini meniupkan angin kencang dan menumbangkan segalanya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "อารมณ์เดือดพล่าน",
			'id-id': "Kemarahan Tak Terkendali"
		},

		effect: {
			'th-th': "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card