import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "斗笠菇",
		th: "คิโนกัซซา"
	},

	illustrator: "Taiga Kasai",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "尾巴上的種子是由毒孢子所構成的。會以肉眼無法 看清的速度出拳打倒敵人。",
		th: "เมล็ดที่หางคือสปอร์พิษ จัดการศัตรูด้วยหมัดอย่างว่องไวชนิดมองแทบไม่เห็น"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "出拳",
			th: "หมัด"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "關節衝擊",
			th: "นักเคิลอิมแพกต์"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
		},

		damage: 120,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card