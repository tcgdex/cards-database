import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		th: "คาราซาลิส",
		'zh-tw': "甲殼繭"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		th: "ดูดน้ำค้างที่ติดอยู่บนใย แล้วรอคอยเวลาที่จะวิวัฒนาการ รังไหมแข็ง ๆ ของมันคอยปกป้องการโจมตี",
		'zh-tw': "會喝絲線上掛著的朝露，持續等待進化的時刻來臨。 堅硬的繭能夠防禦攻擊。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "ใยพันตัว",
			'zh-tw': "纏繞線"
		},

		effect: {
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้จะใช้ท่าต่อสู้ไม่ได้",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，受到這個招式的寶可夢無法使用招式。"
		},

		cost: ["Grass"]
	}, {
		name: {
			th: "กระแทก",
			'zh-tw': "衝撞"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card