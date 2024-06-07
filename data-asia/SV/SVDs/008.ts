import { Card } from "../../../interfaces"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		th: "ฟุคุซึโร",
		id: "Dartrix"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		th: "ไวต่อร่องรอยเป็นอย่างยิ่ง จะจับร่องรอยของฝ่ายตรงข้ามที่ยืนอยู่ข้างหลังแล้วจัดการโดยขว้างปีกอันแหลมคม",
		id: "Dartrix sangat peka terhadap kehadiran sesuatu. Pokémon ini dapat mendeteksi lawan yang berdiri di belakangnya, lalu menghabisi lawan dengan menembakkan bulu tajamnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "แทงทะลุ",
			id: "Menusuk Tembus"
		},

		effect: {
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 20 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini juga memberikan kerusakan sejumlah 20 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 40,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card