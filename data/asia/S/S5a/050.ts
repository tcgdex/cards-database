import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "百足蜈蚣",
		th: "ฟูชิเดะ"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "會咬住對手後注入劇毒。即使是天敵的大型鳥寶可夢，也會身體麻痺，動彈不得。",
		th: "จะกัดแล้วปล่อยพิษร้ายแรงใส่ แม้แต่โปเกมอนนกขนาดใหญ่ที่เป็นศัตรูคู่ปรับก็ยังต้องชาจนขยับตัวไม่ได้"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "毒針",
			th: "เหล็กในพิษ"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ [พิษ]"
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card