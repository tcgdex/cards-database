import { Card } from "../../../interfaces"
import Set from "../S6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洛托姆"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		'zh-tw': "會用等離子構成的身體潛入各式各樣的機器裡。最喜歡惡作劇嚇人。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "驚嚇短路"
		},

		effect: {
			'zh-tw': "將對手的場上寶可夢身上附加的「寶可夢道具」全部丟棄。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "劈哩啪啦"
		},

		damage: 30,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card