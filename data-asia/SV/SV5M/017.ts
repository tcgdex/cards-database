import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熔岩蟲",
		th: "มักแม็ก"
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "大量出現在火山地帶。為了尋找溫暖的地方， 會慢吞吞地爬來爬去。",
		th: "ปรากฏตัวเป็นจำนวนมากบริเวณพื้นที่ภูเขาไฟคลานไปมาช้า ๆ คอยหาพื้นที่ที่อบอุ่น"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "炙燒",
			th: "ลนไฟเผา"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢【灼傷】，則增加40點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้] การโจมตีนี้จะเพิ่มแดเมจอีก 40"
		},

		damage: "10+",
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card