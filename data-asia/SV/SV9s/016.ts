import { Card } from "../../../interfaces"
import Set from "../SV9s"

const card: Card = {
	set: Set,

	name: {
		th: "คามิชชู",
		id: "Dipplin"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		th: "เป็นร่างที่วิวัฒนาการด้วยแอปเปิลพิเศษที่ปลูกในพื้นที่แห่งหนึ่งเท่านั้น เป็นโปเกมอน 2 ตัวที่รวมกันเป็น 1 ตัว",
		id: "Pokémon yang berevolusi dari apel khusus yang hanya dibudidayakan di daerah tertentu. Duo ini adalah satu Pokémon."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "เอนเนอร์จี้ลูป",
			id: "Energy Loop"
		},

		effect: {
			th: "‌เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก นำกลับขึ้นมือ",
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu kembalikan ke Kartu Pegangan."
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