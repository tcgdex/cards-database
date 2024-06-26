import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "搬運小匠"
	},

	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'zh-tw': "會亂揮木材來戰鬥。如果可以 不費勁地搬起沉重的木材， 就代表牠即將要進化了。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "全力拳"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
		},

		damage: 40,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card