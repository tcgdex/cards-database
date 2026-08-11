import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙丘娃"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'zh-tw': "玩沙時堆成的沙山如果沒有在回家時破壞掉，就有可能被靈魂附上而變成沙丘娃。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "震動"
		},

		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "陰森射擊"
		},

		damage: 30,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card