import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Flygon ex",
		th: "ฟลายกอนex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Fighting"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Storm Back",
			th: "สตอร์มแบ็ก"
		},

		effect: {
			id: "Pemain dapat menukar Pokémon ini dengan Pokémon Cadangan.",
			th: "หากต้องการ สลับโปเกมอนนี้กับโปเกมอนบนเบนช์"
		},

		damage: 130,
		cost: ["Fighting"]
	}, {
		name: {
			id: "Peridot Sonic",
			th: "เพริดอตโซนิค"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan masing-masing sejumlah 100 kepada semua Pokémon {ex}/{V} lawan. Kerusakan akibat serangan ini tidak terpengaruh oleh Kelemahan dan Resistansi.",
			th: "[โปเกมอน【ex】 /【V】] ฝ่ายตรงข้ามทุกตัว จะได้รับแดเมจตัวละ 100 แดเมจของ ท่าต่อสู้นี้จะไม่นำจุดอ่อนและความต้านทานมาคิด"
		},

		cost: ["Water", "Fighting", "Metal"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card