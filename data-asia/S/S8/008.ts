import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "敏捷蟲"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "脫殼後變得更輕巧了。為了防止乾燥，會將帶狀的黏膜裹在身上。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "忍者龍捲風"
		},

		effect: {
			'zh-tw': "在這個回合，若從備戰區將這隻寶可夢放置於戰鬥場，則這個招式只需要1個【草】能量即可使用。"
		},

		damage: 120,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card