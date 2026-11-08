import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "เพอร์ม็อตex",
		'id-id': "Pawmot ex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 300,
	types: ["Lightning"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'th-th': "ลูกเตะไฟฟ้า",
			'id-id': "Electric Kick"
		},

		damage: 60,
		cost: ["Lightning"]
	}, {
		name: {
			'th-th': "จู่โจมสายฟ้าแลบ",
			'id-id': "Sentakan Kilat"
		},

		effect: {
			'th-th': "ทิ้งพลังงาน[สายฟ้า]ที่ติดอยู่กับโปเกมอนนี้ 2 ลูกที่ตำแหน่งทิ้งการ์ด ทำแดเมจ 220 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			'id-id': "Buang 2 Energi {Listrik} yang dikenakan pada Pokémon ini ke Trash, serangan ini memberikan kerusakan sejumlah 220 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card