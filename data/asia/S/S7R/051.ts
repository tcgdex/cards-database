import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "豐蜜龍"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		'zh-tw': "身體被甜甜的蜜汁包裹，背部的皮尤其甘甜，過去曾經是小孩的零食。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "緊貼黏液"
		},

		effect: {
			'zh-tw': "造成對手的場上寶可夢身上附加的特殊能量卡的張數×70點傷害。"
		},

		damage: "70×",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "鬥志衝撞"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【V】」，則增加80點傷害。"
		},

		damage: "80+",
		cost: ["Grass", "Fire"]
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card