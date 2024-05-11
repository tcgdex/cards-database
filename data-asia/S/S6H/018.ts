import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拉普拉斯"
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "十分耐寒，不畏冰海。皮膚滑滑的，摸起來會有點涼。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "混合毒素"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。從自己的棄牌區選擇1張【惡】能量卡，附於這隻寶可夢身上。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "煙之暴擊"
		},

		effect: {
			'zh-tw': "增加自己的場上寶可夢身上附加的【惡】能量的數量×20點傷害。"
		},

		damage: "20+",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card