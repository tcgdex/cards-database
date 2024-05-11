import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉艾勒奇",
		th: "เรจิเอเลคิ"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		'zh-tw': "由電能凝聚而成的寶可夢。據說拿下牠身上的圓環後， 就會解放牠潛藏的力量。",
		th: "เป็นก้อนพลังงานไฟฟ้า ว่ากันว่าหากถอดวงแหวนบนร่างกายออกแล้วพลังที่เก็บซ่อนไว้จะได้รับการปลดปล่อย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "電磁聲納",
			th: "โซนาร์แม่เหล็กไฟฟ้า"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張訓練家卡，在給對手看過後加入手牌。",
			th: "เลือกการ์ดเทรนเนอร์ 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู แล้วนำขึ้นมือ"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "目標伏特",
			th: "ทาร์เก็ตโบลต์"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的2個【雷】能量丟棄，對手的1隻備戰寶可夢受到120點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ทิ้งพลังงาน[สายฟ้า]ที่ติดอยู่กับโปเกมอนนี้ 2 ลูกที่ตำแหน่งทิ้งการ์ด แล้วทำแดเมจ 120 กับโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		},

		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card