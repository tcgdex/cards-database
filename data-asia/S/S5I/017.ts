import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡璞・鳴鳴V",
		th: "คาปู โคเคโคV"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "電球",
			th: "อิเล็กทริกบอล"
		},

		damage: 40,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "螺旋雷電",
			th: "สไปรัลธันเดอร์"
		},

		effect: {
			'zh-tw': "增加對手的場上寶可夢身上附加的能量的數量×40點傷害。",
			th: "การโจมตีนี้จะเพิ่มแดเมจอีกเท่ากับจำนวนพลังงานที่ติดอยู่ที่โปเกมอนบนกระดานฝ่ายตรงข้าม x40"
		},

		damage: "20+",
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