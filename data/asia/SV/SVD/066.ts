import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "陸地水母"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "會在森林深處建造集體生活用的聚落。 極為厭惡有外來者靠近。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "敲擊"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "雙重鞭打"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×100點傷害。"
		},

		damage: "100×",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card