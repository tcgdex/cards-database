import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "朽木妖"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'zh-tw': "人們懼怕牠，因為牠據說會吃掉砍倒森林裡樹木的人。但牠對住在森林裡的寶可夢很親切。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "種子炸彈"
		},

		damage: 40,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "暗影囚室"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 120,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
