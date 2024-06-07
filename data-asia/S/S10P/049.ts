import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "青銅鐘"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "被稱為能召喚雨雲的神明。生氣時會用像鐘聲一般令人 毛骨悚然的聲音來威嚇對手。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "耐熱"
		},

		effect: {
			'zh-tw': "這隻寶可夢不會受到對手的【火】寶可夢招式的傷害。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "頭突"
		},

		damage: 100,
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
	regulationMark: "F"
}

export default card