import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Rabsca",
		th: "เบราคาสุ"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		id: "Bayi tertidur di dalam bola Rabsca. Pokémon ini menggelundungkan bola dengan kakinya dan menenangkan bayi tersebut agar dapat tidur nyenyak.",
		th: "มีตัวอ่อนหลับใหลอยู่ภายในลูกบอล ใช้ขาหมุนลูกบอลเพื่อกล่อมให้ ตัวอ่อนนอนหลับสบาย"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Triple Draw",
			th: "ทริปเปิ้ลดรอว์"
		},

		effect: {
			id: "Ambil 3 kartu dari atas Deck sendiri.",
			th: "จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา"
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Kondisi Berbalik",
			th: "กลับตาลปัตร"
		},

		effect: {
			id: "Jika sisa Deck sendiri adalah 3 lembar atau kurang, kerusakan yang diberikan bertambah sejumlah 200.",
			th: "ถ้าจำนวนการ์ดที่เหลือในสำรับการ์ดฝ่ายเราน้อยกว่าหรือเท่ากับ 3 ใบ การ โจมตีนี้จะเพิ่มแดเมจอีก 200"
		},

		damage: "40+",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card