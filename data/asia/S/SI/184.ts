import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "心蝙蝠"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "同步低吼"
		},

		effect: {
			'zh-tw': "若自己的手牌的張數與對手的手牌的張數相同，則增加80點傷害。"
		},

		damage: "30+",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card