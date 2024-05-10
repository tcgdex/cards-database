import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "奇麒麟ex",
		th: "ริกิคิรินex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Darkness"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "尾甲",
			th: "เกราะหาง"
		},

		effect: {
			'zh-tw': "這隻寶可夢不會受到對手的【基礎】寶可夢的「寶可夢【ex】」招式的傷害。",
			th: "โปเกมอนนี้ จะไม่ได้รับแดเมจของท่าต่อสู้จาก [โปเกมอน【ex】] ที่เป็นโปเกมอน[พื้นฐาน]ฝ่ายตรงข้าม"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "惡劣光束",
			th: "เดอร์ตี้บีม"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 30 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		},

		damage: 160,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card