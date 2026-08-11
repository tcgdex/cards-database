import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮皮"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說如果在滿月的夜晚看見皮皮們聚在一起跳舞，就能得到幸福。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "拍擊"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "小揮指"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇對手的戰鬥寶可夢持有的1個招式，作為這個招式使用。"
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
