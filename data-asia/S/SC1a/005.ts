import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電擊獸"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "突發的停電，有一半是因為電擊獸聚集在發電廠胡亂吞食電力造成的。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "拳骨"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "電氣猛擊"
		},

		damage: 70,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card