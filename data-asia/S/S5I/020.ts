import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "逐電犬",
		th: "พัลส์วัน"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		'zh-tw': "電力增強了牠的腳力。當以最高速度奔跑時，時速可以輕易超過９０公里。",
		th: "เพิ่มกำลังขาให้แข็งแรงขึ้นด้วยพลังไฟฟ้า วิ่งเร็วสูงสุดเกิน 90 กิโลเมตรต่อชั่วโมงได้สบาย ๆ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "窮追不捨",
			th: "ไล่ต้อน"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			th: "ในเทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้จะหนีไม่ได้"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "不服輸電光",
			th: "สปาร์คไม่ยอมแพ้"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則這個招式只需要1個【雷】能量即可使用。",
			th: "ถ้าโปเกมอนนี้มีตัวนับแดเมจวางอยู่ สามารถใช้ท่าต่อสู้นี้ด้วยพลังงาน [สายฟ้า] 1 ลูกได้"
		},

		damage: 130,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card