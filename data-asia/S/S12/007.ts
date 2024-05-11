import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿利多斯",
		th: "อาริอาโดส"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "會吐絲來捕捉獵物。每到夜晚就會離開巢穴， 積極地展開狩獵。",
		th: "จับเหยื่อด้วยการพ่นใย พอถึงเวลากลางคืนจะออกห่างจากรังเพื่อออกล่าเหยื่ออย่างจริงจัง"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "陰翳絲",
			th: "ด้ายหม่นหมอง"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，對手的「寶可夢【VSTAR】」使用招式所需的能量增加1個【無】能量。無論有多少隻擁有這個特性的寶可夢，這個效果也不會重複。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ [โปเกมอน【VSTAR】] ฝ่ายตรงข้าม พลังงานสำหรับใช้ท่าต่อสู้จะใช้พลังงาน[ไร้สี]เพิ่มขึ้น 1 ลูก แม้จะมีโปเกมอนที่มีความสามารถนี้กี่ตัวก็ตาม เอฟเฟกต์นี้จะไม่เกิดผลซ้ำ"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "突刺",
			th: "แทง"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card