import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ซึนะเฮบิ <ของฮ็อป>",
		id: "Silicobra <Hop>"
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		th: "ถุงที่คอยืดหดได้เหมือนลูกโป่ง ยิ่งลอกคราบมากเท่าไหร่ถุงที่คอก็จะ ยืดหยุ่นมากขึ้นเท่านั้น",
		id: "Kantong di leher Silicobra yang dapat memanjang dan memendek seperti balon akan menjadi makin elastis setiap kali ia berganti kulit."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "สร้างอาณาเขต",
			id: "Membuat Wilayah"
		},

		effect: {
			th: "เลือกการ์ดสเตเดียม 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			id: "Pilih 1 lembar Stadium dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			th: "แทะ",
			id: "Menggerogot"
		},

		damage: 20,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card