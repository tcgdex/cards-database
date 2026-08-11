import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藏瑪然特"
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'zh-tw': "能夠反彈一切的攻擊，因此被稱為格鬥王之盾，受到人們的畏懼與尊崇。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "防守壓制"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-20」點。"
		},

		damage: 30,
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "力量猛攻"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 120,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card