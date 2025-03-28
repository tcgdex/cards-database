import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Charcadet",
		th: "คาร์โบ"
	},

	illustrator: "Mékayu",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		id: "Ketika bertarung, kekuatan api Charcadet meningkat dan suhunya mencapai 1000 ℃. Pokémon ini menyukai buah beri yang kaya akan kandungan minyak.",
		th: "เมื่อถึงคราวต่อสู้ พลังไฟจะสูงขึ้นถึง 1000 องศาเซลเซียส ชอบ ผลไม้ที่มีน้ำมันเป็นส่วนประกอบเยอะ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Memukul",
			th: "ทุบตี"
		},

		damage: 10,
		cost: ["Fire"]
	}, {
		name: {
			id: "Semburan Api",
			th: "พ่นไฟ"
		},

		effect: {
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash.",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 70,
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