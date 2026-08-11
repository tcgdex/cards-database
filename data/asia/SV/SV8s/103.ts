import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Flygon ex",
		'th-th': "ฟลายกอนex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Fighting"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "Storm Back",
			'th-th': "สตอร์มแบ็ก"
		},

		effect: {
			'id-id': "Pemain dapat menukar Pokémon ini dengan Pokémon Cadangan.",
			'th-th': "หากต้องการ สลับโปเกมอนนี้กับโปเกมอนบนเบนช์"
		},

		damage: 130,
		cost: ["Fighting"]
	}, {
		name: {
			'id-id': "Peridot Sonic",
			'th-th': "เพริดอตโซนิค"
		},

		effect: {
			'id-id': "Serangan ini memberikan kerusakan masing-masing sejumlah 100 kepada semua Pokémon {ex}/{V} lawan. Kerusakan akibat serangan ini tidak terpengaruh oleh Kelemahan dan Resistansi.",
			'th-th': "[โปเกมอน【ex】 /【V】] ฝ่ายตรงข้ามทุกตัว จะได้รับแดเมจตัวละ 100 แดเมจของ ท่าต่อสู้นี้จะไม่นำจุดอ่อนและความต้านทานมาคิด"
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