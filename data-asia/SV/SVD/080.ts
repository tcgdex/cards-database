import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "佛烈托斯"
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'zh-tw': "全身覆蓋著有如鋼鐵般堅硬的殼。 殼裡的真面目至今不明。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "連續旋轉"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×50點傷害。"
		},

		damage: "50×",
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "硬殼回轉"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-50」點。"
		},

		damage: 90,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card