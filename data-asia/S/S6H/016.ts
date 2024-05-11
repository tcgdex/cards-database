import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "騰蹴小將"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "會用腳把樹果從樹木上踢落，用來練習挑球，藉此鍛鍊自己的腳法。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "絞技達人"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手的戰鬥寶可夢【撤退】所需的能量增加2個。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "同步光炮"
		},

		effect: {
			'zh-tw': "若自己的手牌的張數與對手的手牌的張數相同，則增加80點傷害。"
		},

		damage: "80+",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card