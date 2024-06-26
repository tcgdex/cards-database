import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狃拉"
	},

	illustrator: "Krgc",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "會透過團隊合作，一隻負責 引開雙親的注意，一隻負責 偷走蛋，非常地狡猾奸詐。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "居合斬"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "逼近"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 30,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common"
}

export default card