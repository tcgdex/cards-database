import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "โคโมรู",
		id: "Shelgon"
	},

	illustrator: "Julie Hang",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		th: "ภายในเปลือกนั้น เซลล์กำลังเปลี่ยนแปลงอย่างรวดเร็วเพื่อเตรียม พร้อมสำหรับการวิวัฒนาการ",
		id: "Di dalam cangkangnya, sel Shelgon berubah dengan kecepatan tinggi dan sedang bersiap untuk evolusi."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "การ์ดเพรส",
			id: "Guard Press"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]",
			id: "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "เฮฟวีอิมแพกต์",
			id: "Heavy Impact"
		},

		damage: 80,
		cost: ["Fire", "Water", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card