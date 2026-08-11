import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 堵攔熊"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		'zh-tw': "能夠發出驚人的音量。牠在大叫的同時威嚇對手的樣子被稱為「攔堵」。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "惡棍統治者"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。對手將對手自己的手牌丟棄直到剩4張為止。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "關節衝擊"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 180,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card