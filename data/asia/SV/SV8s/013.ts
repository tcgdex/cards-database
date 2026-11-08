import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Rellor",
		'th-th': "ชิกาโรโค"
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		'id-id': "Rellor mematangkan energi evolusi sambil menggelindingkan bola lumpur. Pada akhirnya, waktu evolusi Pokémon ini akan tiba.",
		'th-th': "บ่มพลังงานที่ใช้ในการวิวัฒนาการให้สุกไปในขณะที่กลิ้งก้อนโคลน เพื่อ รอช่วงเวลาที่จะได้วิวัฒนาการ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Mengumpulkan",
			'th-th': "รวบรวม"
		},

		effect: {
			'id-id': "Ambil 1 kartu dari atas Deck sendiri.",
			'th-th': "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Menggelinding",
			'th-th': "กลิ้ง"
		},

		damage: 10,
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