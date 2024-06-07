import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "冰伊布"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "擁有急速降低體熱的能力。 能凍結大氣，引發細碎冰晶 如同寶石般閃耀飛舞的現象。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "冰霜堡壘"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到進化寶可夢招式的傷害。"
		},

		damage: 30,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "冰之爆破"
		},

		damage: 120,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card