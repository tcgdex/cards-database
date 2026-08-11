import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "โบมันเดอร์ex",
		id: "Salamence ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			th: "ไวด์บลาสต์",
			id: "Wide Blast"
		},

		effect: {
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้ามทุกตัว จะได้รับแดเมจตัวละ 50 {โปเกมอนบน เบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini memberikan kerusakan masing-masing sejumlah 50 kepada semua Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Fire", "Colorless", "Colorless"]
	}, {
		name: {
			th: "ดรากอนอิมแพกต์",
			id: "Dragon Impact"
		},

		effect: {
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 300,
		cost: ["Fire", "Water", "Colorless", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card