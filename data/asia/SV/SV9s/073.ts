import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "บัมบะโดโร",
		id: "Mudsdale"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		th: "นอกจากงานใช้แรงแล้ว ยังผลิตโคลนคุณภาพสูงสำหรับทำเครื่องปั้น ดินเผาได้ จึงได้รับความใส่ใจเป็นอย่างดี",
		id: "Tidak hanya membantu pekerjaan kasar, Mudsdale dirawat dengan baik karena menghasilkan lumpur berkualitas bagus untuk bahan membuat tembikar."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			th: "มัดโค้ต",
			id: "Mud Coat"
		},

		effect: {
			th: "แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]",
			id: "Kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
		}
	}],

	attacks: [{
		name: {
			th: "เฮฟวีอิมแพกต์",
			id: "Heavy Impact"
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card