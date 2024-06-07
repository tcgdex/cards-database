import { Card } from "../../../interfaces"
import Set from "../S6K"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雙彈瓦斯"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'zh-tw': "有時會因為非常罕見的突變，出現２個連在一起的雙胞胎小瓦斯彈。"
	},

	stage: "Stage1",

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
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card