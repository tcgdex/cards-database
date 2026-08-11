import { Card } from "models/database/card"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		'th-th': "คามิชชู",
		'id-id': "Dipplin"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'th-th': "เป็นร่างที่วิวัฒนาการด้วยแอปเปิลพิเศษที่ปลูกในพื้นที่แห่งหนึ่งเท่านั้น เป็นโปเกมอน 2 ตัวที่รวมกันเป็น 1 ตัว",
		'id-id': "Pokémon yang berevolusi dari apel khusus yang hanya dibudidayakan di daerah tertentu. Duo ini adalah satu Pokémon."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'th-th': "เอนเนอร์จี้ลูป",
			'id-id': "Energy Loop"
		},

		effect: {
			'th-th': "‌เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก นำกลับขึ้นมือ",
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu kembalikan ke Kartu Pegangan."
		},

		damage: 50,
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