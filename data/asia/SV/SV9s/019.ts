import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "เนียโรเต",
		id: "Floragato"
	},

	illustrator: "Felicia Chen",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		th: "ใช้เถาวัลย์ที่ซ่อนอยู่ภายใต้ขนตามร่างกายที่มีขนาดยาวได้อย่าง คล่องแคล่ว และใช้ดอกตูมแข็ง ๆ ฟาดฟันศัตรู",
		id: "Floragato mengendalikan sulur ranting yang tersembunyi di bawah bulu panjangnya dengan mahir, lalu membanting kuncup keras ke lawan."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "เมจิคัลลีฟ",
			id: "Magical Leaf"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 30 ฟื้นฟู HP ของ โปเกมอนนี้ [30]",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 30, lalu pulihkan HP Pokémon ini sejumlah 30."
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card