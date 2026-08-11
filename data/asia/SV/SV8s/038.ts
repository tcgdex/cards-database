import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Mantine",
		'th-th': "แมนไทน์"
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'id-id': "Saat Mantine berenang dan kecepatannya mulai meninggi, ia akan mulai melompat ke atas ombak dan meluncur begitu saja hingga sejauh 100 m di udara.",
		'th-th': "เมื่อว่ายน้ำจนความเร็วถึงที่ จะกระโดดบินเหนือคลื่นและร่อนได้ถึง 100 เมตร"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Splash",
			'th-th': "สแปลช"
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			'id-id': "Water Dive",
			'th-th': "วอเตอร์ไดฟ์"
		},

		effect: {
			'id-id': "Serangan ini memberikan kerusakan sejumlah 50 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			'th-th': "ทำแดเมจ 50 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำ จุดอ่อนและความต้านทานมาคิด}"
		},

		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card