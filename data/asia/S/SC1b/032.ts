import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "啃果蟲"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		'zh-tw': "終其一生都在蘋果裡度過。遇到天敵鳥寶可夢時，會裝成蘋果保護自己。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "連續滾動"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，增加正面出現的次數×30點傷害。"
		},

		damage: "10+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
