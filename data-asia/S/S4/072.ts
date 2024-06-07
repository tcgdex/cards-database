import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "流氓鱷"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],

	description: {
		'zh-tw': "會藏身在沙漠蜻蜓引發的沙暴中，靜靜等待著獵物的到來。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "亂挖"
		},

		effect: {
			'zh-tw': "將對手的牌庫上方3張卡丟棄。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "暴走"
		},

		effect: {
			'zh-tw': "將這隻寶可夢【混亂】。"
		},

		damage: 180,
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card