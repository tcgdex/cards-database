import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Centiskorch",
		'th-th': "มารุยาคุเดะ"
	},

	illustrator: "Aliya Chen",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		'id-id': "Suhu tubuh Centiskorch saat memancarkan panas mencapai sekitar 800 ℃. Pokémon ini akan loncat menyerang sambil mengelokkan tubuhnya bagaikan pecut.",
		'th-th': "อุณหภูมิร่างยามปล่อยความร้อนประมาณ 800 องศาเซลเซียส โค้ง ร่างราวกับแส้แล้วพุ่งเข้าโจมตี"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Gelombang Panas Berkobar",
			'th-th': "คลื่นร้อนเผาไหม้"
		},

		effect: {
			'id-id': "Serangan ini juga memberikan kerusakan masing-masing sejumlah 30 kepada semua Pokémon Cadangan sendiri. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			'th-th': "โปเกมอนบนเบนช์ฝ่ายเราทุกตัว ก็จะได้รับแดเมจตัวละ 30 ด้วย {โปเกมอน บนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		},

		damage: 130,
		cost: ["Fire"]
	}, {
		name: {
			'id-id': "Heat Blast",
			'th-th': "ฮีทบลาสต์"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card