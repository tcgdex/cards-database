import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "捷拉奧拉",
		th: "เซราโอรา"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		'zh-tw': "會用與落雷相同的速度急速接近敵人，然後用銳利的爪子把對手撕碎。",
		th: "จะเข้าประชิดศัตรูอย่างรวดเร็วด้วยความเร็วเทียบเท่าความเร็วเวลาฟ้าแลบ แล้วใช้เล็บที่แหลมคมฉีกกระชาก"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "戰鬥爪",
			th: "แบตเทิลคลอว์"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為進化寶可夢，則增加30點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นโปเกมอนวิวัฒนาการ การโจมตีนี้จะเพิ่มแดเมจอีก 30"
		},

		damage: "30+",
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "音速伏特",
			th: "มัคโบลท์"
		},

		damage: 80,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "F"
}

export default card