import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蒂安希",
		th: "ดีแอนซี"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "在雙手的間隙中壓縮空氣中的碳元素， 轉瞬間變出許多鑽石。",
		th: "จะรวบรวมคาร์บอนที่อยู่ในอากาศมาอัดรวมระหว่างมือทั้งสองเพื่อสร้างเพชรจำนวนมากในพริบตา"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "公主帷幔",
			th: "ปรินเซสเคอร์เทน"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手從手牌使出支援者時，自己的備戰區的所有【基礎】寶可夢不會受到其效果的影響。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่บนตำแหน่งต่อสู้ โปเกมอน[พื้นฐาน]บนเบนช์ฝ่ายเราทุกตัวจะไม่ได้รับเอฟเฟกต์เมื่อฝ่ายตรงข้ามนำการ์ดซัพพอร์ตจากบนมือออกมาใช้"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "扣殺抽出",
			th: "สไปค์ดรอว์"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出2張卡。",
			th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card