import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鋼鎧鴉V",
		th: "อาร์เมอร์การ์V"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 210,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "緊抓",
			th: "โฉบเหยื่อ"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			th: "ในเทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้จะหนีไม่ได้"
		},

		damage: 30,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "天空颶風",
			th: "สกายเฮอริเคน"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「天空颶風」。",
			th: "ในเทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่า [สกายเฮอริเคน] ไม่ได้"
		},

		damage: 190,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card