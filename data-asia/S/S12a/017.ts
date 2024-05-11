import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鴨嘴炎獸",
		th: "บูเบิร์น"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		'zh-tw': "大口吸氣時，肚子裡的火焰就會燃燒得更旺盛， 達到攝氏２０００度。",
		th: "เมื่อสูดลมหายใจเข้าเฮือกใหญ่ เปลวเพลิงในท้องจะพลุ่งจนสูงถึง 2,000 องศาเซลเซียส"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "百萬噸重拳",
			th: "เมกะตันพันช์"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "伏特爆發",
			th: "โวลต์โพลชัน"
		},

		effect: {
			'zh-tw': "若自己的備戰區有「電擊魔獸」，則增加120點傷害。",
			th: "ถ้าบนเบนช์ฝ่ายเรามี [เอเลคิเบิล] อยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 120"
		},

		damage: "120+",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card