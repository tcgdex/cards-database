import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大嘴娃"
	},

	illustrator: "313",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		'zh-tw': "大嘴娃能用自己那由鋼角變化而成的巨大顎部 將對手一口緊緊咬住。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "惡作劇嚼碎"
		},

		effect: {
			'zh-tw': "造成這隻寶可夢身上附加的【超】能量的數量×30點傷害。"
		},

		damage: "30×",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card