import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เอสเบิร์นex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			th: "แฟลร์สไตรค์"
		},

		effect: {
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [แฟลร์สไตรค์] ไม่ได้"
		},

		damage: 280,
		cost: ["Fire", "Colorless", "Colorless"]
	}, {
		name: {
			th: "การ์เนตวอลเลย์"
		},

		effect: {
			th: "ทำแดเมจ 180 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		},

		cost: ["Fire", "Fighting", "Darkness"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card