import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Armarouge",
		th: "กุเร็นอาร์มา"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		id: "Armarouge mengenakan zirah yang diperkuat dengan tenaga api dan psikokinesis. Pokémon ini menembakkan bola api yang membara.",
		th: "สวมใส่ชุดเกราะที่เสริมความแข็งแกร่งด้วยพลังจิตและพลังงานไฟ ปล่อยลูกบอลไฟที่แสนร้อนระอุได้"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Lidah Api",
			th: "เผาไหม้"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Rouge Blaster",
			th: "กุเร็นบลัสเตอร์"
		},

		effect: {
			id: "Buang semua Energi {Api} yang dikenakan pada Pokémon ini ke Trash, serangan ini memberikan kerusakan sejumlah 180 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			th: "ทิ้งพลังงาน[ไฟ]ที่ติดอยู่กับโปเกมอนนี้ทั้งหมดที่ตำแหน่งทิ้งการ์ด ทำแดเมจ 180 กับโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อน และความต้านทานมาคิด}"
		},

		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card