import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雙卵細胞球"
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說當牠的２個大腦意見一致時，發出的念力 可以覆蓋方圓１公里的範圍。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "細胞尖槍"
		},

		effect: {
			'zh-tw': "在對手的1隻備戰寶可夢身上放置2個傷害指示物。"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card