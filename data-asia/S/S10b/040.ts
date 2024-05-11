import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "修建老匠V"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "雙倍奉還"
		},

		effect: {
			'zh-tw': "增加與在上個對手的回合這隻寶可夢受到的招式的傷害點相同數量的傷害。"
		},

		damage: "20+",
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "爆裂拳"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加90點傷害，並將對手的戰鬥寶可夢【混亂】。"
		},

		damage: "90+",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card