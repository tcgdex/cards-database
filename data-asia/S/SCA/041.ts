import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "哥德寶寶"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "雖然還是寶寶，有時也會用儲存在像蝴蝶結一樣的觸角裡的精神力量來戰鬥。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "天眼"
		},

		effect: {
			'zh-tw': "查看對手的牌庫上方5張卡，以任意順序排列，放回牌庫上方。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "重摑"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card