import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Rellor",
		th: "ชิกาโรโค"
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		id: "Rellor mematangkan energi evolusi sambil menggelindingkan bola lumpur. Pada akhirnya, waktu evolusi Pokémon ini akan tiba.",
		th: "บ่มพลังงานที่ใช้ในการวิวัฒนาการให้สุกไปในขณะที่กลิ้งก้อนโคลน เพื่อ รอช่วงเวลาที่จะได้วิวัฒนาการ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Mengumpulkan",
			th: "รวบรวม"
		},

		effect: {
			id: "Ambil 1 kartu dari atas Deck sendiri.",
			th: "จั่วการ์ด 1 ใบจากสำรับการ์ดฝ่ายเรา"
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Menggelinding",
			th: "กลิ้ง"
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