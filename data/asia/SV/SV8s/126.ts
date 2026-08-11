import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Klefki",
		th: "เคลฟฟี"
	},

	illustrator: "mingo",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		id: "Keluarga bangsawan zaman dulu secara turun-temurun mewariskan dan menjaga dengan baik Klefki yang dipercaya untuk mengelola kunci brankas.",
		th: "ขุนนางสมัยก่อนจากรุ่นสู่รุ่นจะดูแลเคลฟฟีที่คอยรักษากุญแจห้องเก็บ สมบัติเป็นอย่างดี"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Ambil Mengisi",
			th: "สอดเข้าจั่ว"
		},

		effect: {
			id: "Buang 1 lembar Kartu Pegangan sendiri ke Trash. Setelah itu, ambil 2 kartu dari atas Deck sendiri.",
			th: "ทิ้งการ์ดบนมือฝ่ายเรา 1 ใบที่ตำแหน่งทิ้งการ์ด หลังจากนั้น จั่วการ์ด 2 ใบ จากสำรับการ์ดฝ่ายเรา"
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Mengait",
			th: "จับแขวน"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card