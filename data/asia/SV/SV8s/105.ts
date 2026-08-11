import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Drilbur",
		th: "โมกุริว"
	},

	illustrator: "Ounishi",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		id: "Drilbur dapat menggali sangat cepat di dalam tanah dengan cara merapatkan cakar di kedua tangannya dan memutar tubuh dengan kecepatan tinggi.",
		th: "เมื่อผสานกรงเล็บบนมือทั้งสองเข้ากันแล้วหมุนตัวด้วยความเร็วสูง จะเจาะลงสู่ใต้พื้นดินด้วยความเร็วสูง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Gali",
			th: "ขุดขุด"
		},

		effect: {
			id: "Buang 1 kartu dari atas Deck lawan ke Trash.",
			th: "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Semprotan Lumpur",
			th: "สาดโคลน"
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