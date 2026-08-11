import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龍頭地鼠"
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "金屬爪"
		},

		damage: 50,
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "岩石封鎖"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
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
	regulationMark: "E"
}

export default card