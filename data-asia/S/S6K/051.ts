import { Card } from "../../../interfaces"
import Set from "../S6K"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "勾帕路翁"
	},

	illustrator: "Kazuma Koda",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'zh-tw': "有著鋼鐵的心靈與身體。當人類傷害寶可夢時，會與夥伴一起制裁人類。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鐵頭碰"
		},

		damage: 40,
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "金屬斬"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 130,
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

	retreat: 2,
	regulationMark: "E"
}

export default card