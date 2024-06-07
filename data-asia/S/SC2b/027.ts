import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "茸茸羊"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "因為體毛的性質發生變化，只需要一點點體毛就能產生大量的電。有著可以屏蔽電力的光滑皮膚。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "劈哩啪啦"
		},

		damage: 40,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
