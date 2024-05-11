import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 喵頭目"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'zh-tw': "有著十分好戰的性格。頭上像鐵頭盔一樣的東西其實是牠硬化後的體毛。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "劈開"
		},

		damage: 50,
		cost: ["Metal", "Colorless"]
	}, {
		name: {
			'zh-tw': "銳爪匕首"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×80點傷害。"
		},

		damage: "80×",
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card