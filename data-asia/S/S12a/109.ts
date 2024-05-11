import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烈咬陸鯊V",
		th: "กาเบรียสV"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 200,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "龍爪",
			th: "ดรากอนคลอว์"
		},

		damage: 120,
		cost: ["Water", "Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "音波強襲",
			th: "โซนิคสไตรค์"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的3個能量丟棄，對手的1隻寶可夢受到220點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ 3 ลูกที่ตำแหน่งทิ้งการ์ด แล้วทำแดเมจ 220 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		},

		cost: ["Water", "Fighting", "Fighting", "Colorless"]
	}],

	retreat: 0,
	regulationMark: "F"
}

export default card