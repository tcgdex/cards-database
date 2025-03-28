import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "牙牙"
	},

	illustrator: "Orca",
	category: "Pokemon",
	hp: 70,
	types: ["Dragon"],

	description: {
		'zh-tw': "如果在岩石或樹木上 發現了獨特的齒痕， 附近一定棲息著牙牙。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "抓"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "銳利之牙"
		},

		damage: 30,
		cost: ["Fighting", "Metal"]
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common"
}

export default card