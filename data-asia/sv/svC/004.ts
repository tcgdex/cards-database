import { Card } from "../../../interfaces"
import Set from "../svC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "頑皮雷彈"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "雖然儲存的電能越多，移動的速度也會變得越快，但同時也會變得更容易爆炸。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "光彈"
		},

		damage: 60,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "滾動衝撞"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card