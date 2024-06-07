import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飛天螳螂"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "以忍者般敏捷的動作迷惑獵物，然後趁對方露出破綻的一瞬間用鐮刀將獵物切碎。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "劍舞"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢「高速鐮」的傷害「+70」點。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "高速鐮"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
