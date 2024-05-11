import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "布里卡隆V",
		th: "บริการอนV"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 230,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "尖刺鋒線",
			th: "นีดเดิ้ลไลน์"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，當自己的戰鬥場的「布里卡隆【V】」受到對手的寶可夢招式的傷害時，在使用招式的寶可夢身上放置3個傷害指示物。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ [บริการอน【V】] บนตำแหน่งต่อสู้ฝ่ายเรา เมื่อได้รับแดเมจจากท่าต่อสู้ของโปเกมอนฝ่ายตรงข้าม วางตัวนับแดเมจ 3 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "達陣",
			th: "ทัชดาวน์"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [30]"
		},

		damage: 130,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card