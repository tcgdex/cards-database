import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 大蔥鴨"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'zh-tw': "生活在伽勒爾的大蔥鴨。揮舞著又粗又壯的大蔥，是英勇奮戰的戰士。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "碎岩"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。"
		},

		damage: "10+",
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "突刺"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card