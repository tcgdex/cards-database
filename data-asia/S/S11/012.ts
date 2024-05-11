import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "朽木妖"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "人們懼怕牠，因為牠據說會吃掉砍倒森林裡樹木的人。 但牠對住在森林裡的寶可夢很親切。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "老樹結界"
		},

		effect: {
			'zh-tw': "這隻寶可夢就算受到對手的「寶可夢【V】」招式的傷害而【氣絕】，對手也無法獲得獎賞卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "終極衝擊"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 150,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card