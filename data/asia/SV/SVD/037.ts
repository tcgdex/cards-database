import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "三合一磁怪"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "３隻小磁怪因著強烈的磁力而結合。只要靠近牠 就會發生強烈的耳鳴。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "撞擊"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "電球"
		},

		damage: 60,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card