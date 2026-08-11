import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電擊魔獸"
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		'zh-tw': "用尾巴尖端按住敵人，灌注高壓電流。敵人瞬間就變成黑炭了。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "電擊"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			'zh-tw': "動力伏特"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有特殊能量，則增加90點傷害。"
		},

		damage: "90+",
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card