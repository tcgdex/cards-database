import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ไลโวลต์",
		'id-id': "Manectric"
	},

	illustrator: "Izucch",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'th-th': "แทบจะไม่ค่อยปรากฏกายให้เห็นต่อหน้าผู้คน ว่ากันว่าบริเวณที่มีฟ้าผ่า คือที่อยู่ของมัน",
		'id-id': "Pokémon ini jarang memperlihatkan dirinya di depan manusia. Kabarnya ada sarang Manectric di tempat yang disambar petir."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "ลูกเตะไฟฟ้า",
			'id-id': "Electric Kick"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'th-th': "แฟลชอิมแพกต์",
			'id-id': "Flash Impact"
		},

		effect: {
			'th-th': "โปเกมอนบนเบนช์ฝ่ายเรา 1 ตัว ก็จะได้รับแดเมจ 40 ด้วย {โปเกมอนบนเบนช์ จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			'id-id': "Serangan ini juga memberikan kerusakan sejumlah 40 kepada 1 Pokémon Cadangan sendiri. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 120,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card