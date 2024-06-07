import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電龍"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	description: {
		'zh-tw': "尾巴發出的耀眼光芒被船員們當成引路的路標，從過去就一直深受重視。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "電擊"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 40,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "電子粉碎"
		},

		effect: {
			'zh-tw': "若希望，選擇3個這隻寶可夢身上附加的【雷】能量，將其丟棄。這個情況下，增加120點傷害。"
		},

		damage: "100+",
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card