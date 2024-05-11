import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "阿爾宙斯V",
		th: "อาร์เซอุสV"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 220,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "三重蓄能",
			th: "ทรินิตี้ชาร์จ"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張基本能量卡，以任意方式附於自己的「寶可夢【V】」身上。並且重洗牌庫。",
			th: "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา ติดที่ [โปเกมอน【V】] ฝ่ายเราตามชอบ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "力量刀鋒",
			th: "พาวเวอร์เอดจ์"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card