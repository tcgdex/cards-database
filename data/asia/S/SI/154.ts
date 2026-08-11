import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "逐電犬"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "窮追不捨"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "不服輸電光"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則這個招式只需要1個【雷】能量即可使用。"
		},

		damage: 130,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card