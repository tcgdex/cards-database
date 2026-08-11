import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Drilbur",
		'th-th': "โมกุริว"
	},

	illustrator: "Ounishi",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'id-id': "Drilbur dapat menggali sangat cepat di dalam tanah dengan cara merapatkan cakar di kedua tangannya dan memutar tubuh dengan kecepatan tinggi.",
		'th-th': "เมื่อผสานกรงเล็บบนมือทั้งสองเข้ากันแล้วหมุนตัวด้วยความเร็วสูง จะเจาะลงสู่ใต้พื้นดินด้วยความเร็วสูง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Gali",
			'th-th': "ขุดขุด"
		},

		effect: {
			'id-id': "Buang 1 kartu dari atas Deck lawan ke Trash.",
			'th-th': "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Semprotan Lumpur",
			'th-th': "สาดโคลน"
		},

		damage: 10,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card