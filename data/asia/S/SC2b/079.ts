import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨鉗螳螂V"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 210,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "撕下"
		},

		effect: {
			'zh-tw': "選擇對手的戰鬥寶可夢身上附加的「寶可夢道具」卡與「特殊能量」卡各1張，將其丟棄。"
		},

		damage: 30,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "利爪揮砍"
		},

		damage: 140,
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
