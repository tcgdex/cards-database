import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮可西"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		'zh-tw': "妖精的一種。極少出現在人類面前。一感覺到有人就會立刻逃走。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "月之恩"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。將自己的身上附有【超】能量的戰鬥寶可夢恢復「20」HP，並將1個特殊狀態恢復。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "魔法射擊"
		},

		damage: 80,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
