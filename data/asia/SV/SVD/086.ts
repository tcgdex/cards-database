import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "噗隆隆"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		'zh-tw': "據說牠是神秘的毒寶可夢鑽進了被放置在廢鐵工廠 的引擎裡而誕生的。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "頭突"
		},

		damage: 60,
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

	retreat: 2,
	regulationMark: "G"
}

export default card