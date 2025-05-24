import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "ทรานเซล",
		id: "Metapod"
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		th: "แม้จะถูกห่อหุ้มอยู่ในเปลือกแข็งแต่ลำตัวนุ่มนิ่มก็เลยไม่สามารถทนต่อ การโจมตีรุนแรงได้",
		id: "Metapod dilindungi oleh cangkang yang keras, tetapi bagian dalam tubuhnya lunak sehingga tidak dapat menahan serangan yang kuat."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "แข็งขึ้น",
			id: "Mengeras"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจของท่าต่อสู้ที่น้อยกว่า หรือเท่ากับ [60]",
			id: "Pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan akibat serangan sejumlah 60 atau kurang."
		},

		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card