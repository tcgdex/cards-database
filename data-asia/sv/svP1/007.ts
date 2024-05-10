import { Card } from "../../../interfaces"
import Set from "../svP1"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "墓揚犬ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "咬緊"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 30,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "掃墓"
		},

		effect: {
			'zh-tw': "增加自己的棄牌區的【超】寶可夢卡的張數×10點傷害。"
		},

		damage: "160+",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card