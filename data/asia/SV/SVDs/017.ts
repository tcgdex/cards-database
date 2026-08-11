import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "ลิซาร์ดอนex",
		'id-id': "Charizard ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'th-th': "เบรฟวิง",
			'id-id': "Brave Wing"
		},

		effect: {
			'th-th': "ถ้าโปเกมอนนี้มีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 100",
			'id-id': "Jika Pokémon ini memiliki Token Kerusakan, kerusakan yang diberikan bertambah sejumlah 100."
		},

		damage: "60+",
		cost: ["Fire"]
	}, {
		name: {
			'th-th': "วงล้อระเบิดไฟ",
			'id-id': "Pusaran Ledakan Api"
		},

		effect: {
			'th-th': "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 3 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'id-id': "Pilih 3 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 330,
		cost: ["Fire", "Fire", "Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card