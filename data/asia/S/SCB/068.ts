import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多龍巴魯托"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		'zh-tw': "讓多龍梅西亞住在自己角上的洞裡。戰鬥開始後會用音速將多龍梅西亞發射出去。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "穿透"
		},

		effect: {
			'zh-tw': "當這隻寶可夢受到招式的傷害時，己方擲1次硬幣。若為正面，則這隻寶可夢不會受到那個傷害。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "潛靈奇襲"
		},

		effect: {
			'zh-tw': "將3個傷害指示物以任意方式放置於對手的備戰寶可夢身上。"
		},

		damage: 120,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card