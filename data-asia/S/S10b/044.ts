import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大鋼蛇"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		'zh-tw': "據說當大岩蛇活到了１００年以上，身體的成分就會變得如同鑽石一般。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "泰山壓頂"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "鐵之光炮"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 170,
		cost: ["Metal", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card