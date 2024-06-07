import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蓋蓋蟲"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "有著會對電能產生反應的奇異體質。和小嘴蝸待在一起就會進化。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "連續頭錘"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×20點傷害。"
		},

		damage: "20×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
