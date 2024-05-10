import { Card } from "../../../interfaces"
import Set from "../svC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "布土撥"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		'zh-tw': "當群體受到襲擊的時候，會率先挑起戰鬥，以結合了電擊的格鬥技撂倒敵人。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "劈哩啪啦"
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "電氣子彈"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 50,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card