import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 大蔥鴨",
		th: "กาลาร์ คาโมเนกิ"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'zh-tw': "在不斷活用又粗又長的伽勒爾大蔥的過程中，大蔥鴨演化成了獨特的樣子。",
		th: "คาโมเนกิแปลงเป็นร่างที่มีเอกลักษณ์เฉพาะตัวในระหว่างที่ใช้ต้นหอมลำต้นอวบยาวของกาลาร์ได้อย่างชำนาญ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "貫徹",
			th: "ทะลวง"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算抵抗力。",
			th: "แดเมจของท่าต่อสู้นี้ไม่นำความต้านทานมาคิด"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card