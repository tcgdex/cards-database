import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "ลาพลาซ",
		id: "Lapras"
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		th: "ทนทานความหนาวเย็นแม้ทะเลน้ำแข็งก็ไม่เป็นไร ผิวหนังเรียบลื่นทำให้รู้สึกเย็นเล็กน้อย",
		id: "Lapras tahan dingin dan laut es pun tidak menjadi masalah baginya. Kulitnya mulus dan agak dingin."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ลูกเห็บ",
			id: "Hujan Es"
		},

		effect: {
			th: "โปเกมอนฝ่ายตรงข้ามทุกตัว จะได้รับแดเมจตัวละ 10 {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini memberikan kerusakan masing-masing sejumlah 10 kepada semua Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			th: "ฟรีซวินด์",
			id: "Freeze Wind"
		},

		damage: 100,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card