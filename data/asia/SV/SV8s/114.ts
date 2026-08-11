import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Deino",
		'th-th': "โมโนซึ"
	},

	illustrator: "YASHIRO Nanaco",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'id-id': "Sarang Deino jauh di dalam gua. Karena makanannya sedikit, ia menggigit dan akan memakan apa pun yang bergerak.",
		'th-th': "อาศัยอยู่ในถ้ำลึก เพราะอาหารมีน้อยเลยจะกัดและพยายามกิน ทุกอย่างที่ขยับได้"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Meratakan Tanah",
			'th-th': "กระทืบ"
		},

		effect: {
			'id-id': "Buang 1 kartu dari atas Deck lawan ke Trash.",
			'th-th': "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'id-id': "Menggigit",
			'th-th': "กัดติด"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card