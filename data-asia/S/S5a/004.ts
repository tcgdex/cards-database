import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "赫拉克羅斯",
		th: "เฮราครอส"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "會在森林中四處尋找甜甜蜜。雖然以擁有一身怪力為傲，但卻不是很擅長飛行。",
		th: "เที่ยวหาน้ำผึ้งอันหอมหวานทั่วป่า มีความมั่นใจในพละกำลังอันมหาศาลแต่ไม่ถนัดเรื่องบินสักเท่าไหร่"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "角撞",
			th: "เขาขวิด"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "一力上投",
			th: "จับทุ่ม"
		},

		effect: {
			'zh-tw': "擲2次硬幣，若全部為正面，則增加160點傷害。",
			th: "ทอยเหรียญ 2 ครั้ง ถ้าออกหัวทั้งหมด การโจมตีนี้จะเพิ่มแดเมจอีก 160"
		},

		damage: "40+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card