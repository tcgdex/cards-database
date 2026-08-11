import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龐岩怪",
		th: "กิไกอาซ"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	description: {
		'zh-tw': "牠射出的能量彈具有能擊飛砂石車的破壞力。不過只有在晴天才能射擊。",
		th: "ระเบิดพลังงานของมันจะปล่อยออกมาได้เฉพาะวันที่อากาศแจ่มใสเท่านั้น แต่มีพลังทำลายล้างถึงขนาดพัดรถบรรทุกเทท้ายกระเด็นไปได้"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "防守壓制",
			th: "การ์ดเพรส"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-50」點。",
			th: "ในเทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-50]"
		},

		damage: 50,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "高壓縮彈",
			th: "กระสุนแรงดันสูง"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			th: "โปเกมอนตัวนี้ก็จะได้รับแดเมจเท่ากับจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10 ด้วย"
		},

		damage: 180,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card