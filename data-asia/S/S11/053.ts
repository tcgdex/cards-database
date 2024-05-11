import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多龍奇"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "飛行速度為每小時２００公里。與多龍梅西亞一起戰鬥， 到牠進化為止都會細心照顧。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "陰森射擊"
		},

		damage: 40,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card