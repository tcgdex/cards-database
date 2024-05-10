import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "自爆磁怪"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 170,
	types: ["Lightning"],

	description: {
		'zh-tw': "據說會一邊發送怪異電波一邊在空中四處飛行， 接收未知的電波。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "磁力抵制"
		},

		effect: {
			'zh-tw': "若希望，將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]"
		},

		damage: 50,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "打雷"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 180,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card