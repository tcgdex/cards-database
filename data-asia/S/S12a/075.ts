import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉洛克",
		th: "เรจิร็อก"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "全身所有部分都是由岩石構成。即使身體有磨損， 也能自己補上岩石修復。",
		th: "ทุกส่วนของร่างกายสร้างขึ้นด้วยหินผา แม้ร่างกายถูกกัดเซาะก็ซ่อมแซมด้วยตัวเองโดยการนำก้อนหินมาติด"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "雷吉之門",
			th: "เรจิเกต"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "終極衝擊",
			th: "กีก้าอิมแพค"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
		},

		damage: 140,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card