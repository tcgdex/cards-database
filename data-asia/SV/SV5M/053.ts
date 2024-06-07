import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大舌頭",
		th: "เบโรรินกา"
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'zh-tw': "沾到牠黏糊糊的唾液後如果放著不管，就會變得 奇癢無比，而且癢個不停。",
		th: "ถ้าเผลอไปสัมผัสน้ำลายที่เหนียวหนืดแล้วปล่อยทิ้งไว้จะทำให้คันมากแล้วก็ไม่หายคันด้วย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "舌引",
			th: "ดึงเข้าด้วยลิ้น"
		},

		effect: {
			'zh-tw': "查看對手的手牌，從其中選擇最多2張【基礎】寶可夢卡，放置於對手的備戰區。",
			th: "ดูการ์ดบนมือฝ่ายตรงข้าม เลือกการ์ดโปเกมอน[พื้นฐาน]ได้สูงสุด 2 ใบจากในนั้น วางบนเบนช์ฝ่ายตรงข้าม"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "怪力",
			th: "พลังมหากาฬ"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card