import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉鐸拉戈V",
		th: "เรจิดราโกV"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "天之吶喊",
			th: "เสียงตะโกนแห่งสวรรค์"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方3張卡丟棄，將其中的能量卡全部附於這隻寶可夢身上。",
			th: "ทิ้งการ์ด 3 ใบจากด้านบนของสำรับการ์ดฝ่ายเราที่ตำแหน่งทิ้งการ์ด นำการ์ดพลังงานทั้งหมดที่อยู่ในนั้น ติดที่โปเกมอนนี้"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "龍之鐳射",
			th: "ดรากอนเลเซอร์"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 30 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		},

		damage: 130,
		cost: ["Grass", "Grass", "Fire"]
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card