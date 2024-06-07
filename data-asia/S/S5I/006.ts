import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "彩粉蝶",
		th: "วิวิญอง"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "翅膀花紋依棲息地的氣候和水土而有所不同的寶可夢。會散佈色彩鮮艷的鱗粉。",
		th: "เป็นโปเกมอนที่มีลายบนปีกต่างกันไปตามสภาพภูมิประเทศและสภาพอากาศที่อยู่ จะโปรยผงละอองสีสดใสออกมา"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "生機粉",
			th: "ไวทัลพาวเดอร์"
		},

		effect: {
			'zh-tw': "選擇2隻自己的備戰寶可夢，將HP全部恢復。",
			th: "เลือกโปเกมอนบนเบนช์ฝ่ายเรา 2 ตัวและฟื้นฟู HP ทั้งหมด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "起風",
			th: "เรียกลม"
		},

		damage: 90,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card