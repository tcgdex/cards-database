import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "布魯皇"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'zh-tw': "發達的下顎和沉重的牙齒是牠的武器。只要不惹牠生氣，就不太會咬人哦。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "緊咬不放"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "魯莽頭擊"
		},

		damage: 130,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
