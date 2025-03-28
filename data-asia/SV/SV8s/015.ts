import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Wo-Chien",
		th: "ฉงเจี่ยน"
	},

	illustrator: "danciao",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		id: "Wo-Chien mengisap energi tumbuhan. Hutan sekeliling Pokémon ini langsung menjadi tandus dan sawah-sawah menjadi gersang.",
		th: "ดูดพลังงานของต้นไม้ใบหญ้า ทำให้ป่าไม้โดยรอบเหี่ยวเฉาอย่าง รวดเร็วและไร่นาไม่ค่อยออกผล"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Greed Hazard",
			th: "โลภอันตราย"
		},

		effect: {
			id: "Jika sisa Deck sendiri adalah 3 lembar atau kurang, serangan ini juga memberikan kerusakan masing-masing sejumlah 120 kepada 2 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			th: "ถ้าจำนวนการ์ดที่เหลือในสำรับการ์ดฝ่ายเราน้อยกว่าหรือเท่ากับ 3 ใบ โปเกมอนบนเบนช์ฝ่ายตรงข้าม 2 ตัว ก็จะได้รับแดเมจตัวละ 120 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			id: "Cambuk Melibatkan",
			th: "แส้พันพัว"
		},

		effect: {
			id: "Buang 3 kartu dari atas Deck sendiri ke Trash.",
			th: "‌ทิ้งการ์ด 3 ใบจากด้านบนของสำรับการ์ดฝ่ายเราที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 130,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card