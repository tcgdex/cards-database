import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "โยมาวารุ"
	},

	illustrator: "James Turner",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		th: "จะรู้สึกหนาวสั่นอย่างรุนแรงตอนที่ถูกมันจ้องเขม็งด้วยนัยน์ตาเดียวสีแดงฉานและสูบพลังงานชีวิตไป"
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "รับวิญญาณ"
		},

		effect: {
			th: "เลือกการ์ด [โยมาวารุ] ได้สูงสุด 3 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา วางบนเบนช์"
		},

		cost: ["Psychic"]
	}, {
		name: {
			th: "งึมงำ"
		},

		damage: 30,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card