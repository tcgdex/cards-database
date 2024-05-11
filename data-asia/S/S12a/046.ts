import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鬼斯",
		th: "โกส"
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		'zh-tw': "從氣體中誕生的生命體。若被牠那有毒氣體形成的身體裹住， 不管是誰都會昏迷。",
		th: "สิ่งมีชีวิตที่เกิดจากแก๊ส เมื่อถูกห่อหุ้มด้วยร่างแก๊สที่เป็นพิษ ไม่ว่าใครก็หมดสภาพ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "無聲加害",
			th: "แอบวาง"
		},

		effect: {
			'zh-tw': "在對手的戰鬥寶可夢身上放置1個傷害指示物。",
			th: "วางตัวนับแดเมจ 1 ตัวบนโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม"
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "F"
}

export default card