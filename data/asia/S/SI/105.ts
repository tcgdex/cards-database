import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "野蠻鱸魚"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		'zh-tw': "凶暴出了名的寶可夢。 牠們最常和紅條紋 野蠻鱸魚打群架。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "傷痕累累"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×10點傷害。"
		},

		damage: "30+",
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card