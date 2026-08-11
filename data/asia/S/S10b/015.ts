import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "傑尼龜"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "當牠把長長的脖子縮回殼裡時，會順勢發射力道強勁的水槍。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "水槍"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card