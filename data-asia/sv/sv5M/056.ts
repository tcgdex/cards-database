import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "優雅貓",
		th: "เอเนโคโรโระ"
	},

	illustrator: "Keisin",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'zh-tw': "最討厭骯髒的地方。總是待在舒適的地方 打理自己的毛髮。",
		th: "เกลียดสถานที่ที่สกปรกมาก จะเลียแต่งขนในสถานที่ที่น่าอยู่และสบายเสมอ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "擺尾蠱惑",
			th: "หางสั่งมึน"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "能量攪拌",
			th: "เอนเนอร์จี้มิกเซอร์"
		},

		effect: {
			'zh-tw': "選擇自己的場上寶可夢身上附加的任意數量的能量卡，以任意方式改附於自己的寶可夢身上。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเราตามจำนวนที่ชอบ ย้ายไปติดกับโปเกมอนฝ่ายเราตามชอบ"
		},

		damage: 110,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card