import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蟲電寶"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		'zh-tw': "蟲電寶消化吃掉的落葉時會產生電能。牠會把這些電能儲存在自己肚子上的電囊中。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "夾住"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "伏特頭擊"
		},

		damage: 60,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card