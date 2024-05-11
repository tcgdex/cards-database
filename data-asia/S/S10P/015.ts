import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "席多藍恩VMAX"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "熔岩增輝"
		},

		effect: {
			'zh-tw': "若場上有自己的競技場卡，則在自己的回合時可使用1次。將這隻寶可夢恢復「50」HP。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "極巨爆熱"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。"
		},

		damage: 180,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card