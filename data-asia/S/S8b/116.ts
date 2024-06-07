import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鋼鎧鴉VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 320,
	types: ["Metal"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "潔淨之軀"
		},

		effect: {
			'zh-tw': "這隻寶可夢不會受到對手的寶可夢的特性的效果的影響。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "超極巨風狂暴雨"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「超極巨風狂暴雨」。"
		},

		damage: 240,
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

	retreat: 0,
	regulationMark: "E"
}

export default card