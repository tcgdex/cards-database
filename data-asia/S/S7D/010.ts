import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "胖丁"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "隨著棲息的地方不同，所唱的歌也完全不一樣。甚至有一部分胖丁唱的歌聽起來就像是在大吼大叫。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "拍擊"
		},

		damage: 20,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "一同滾動"
		},

		effect: {
			'zh-tw': "造成自己的備戰區的，持有「一同滾動」招式的寶可夢的數量×20點傷害。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card