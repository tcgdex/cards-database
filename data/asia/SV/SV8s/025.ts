import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Volcarona",
		'th-th': "อุลกามอธ"
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'id-id': "Volcarona menyebarkan sisik berapinya. Habisnya pasokan oksigen di area sekitar itu lebih berbahaya dari pada udara panas membara yang ia sebabkan.",
		'th-th': "โปรยเกล็ดปีกไฟรอบ ๆ สิ่งที่อันตรายกว่าความร้อนสูงของเกล็ดคือ การที่ออกซิเจนโดยรอบจะค่อย ๆ หายไป"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Mengisap Darah",
			'th-th': "ดูดเลือด"
		},

		effect: {
			'id-id': "Pulihkan HP Pokémon ini sejumlah kerusakan yang diberikan kepada Pokémon Bertarung lawan.",
			'th-th': "ฟื้นฟู HP ของโปเกมอนนี้ ตามจำนวนแดเมจที่ทำกับโปเกมอนบนตำแหน่งต่อสู้ ฝ่ายตรงข้าม"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Kepakan Ganas",
			'th-th': "สยายปีกโหมกระหน่ำ"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 50.",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 50 ด้วย"
		},

		damage: 150,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card