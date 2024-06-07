import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "劈斬司令"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'zh-tw': "率領著一大群駒刀小兵。為了防止手下們背叛自己，總是睜大著眼睛監視牠們。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "突擊指令"
		},

		effect: {
			'zh-tw': "增加自己的備戰區的「駒刀小兵」的數量×30點傷害。"
		},

		damage: "30+",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "利刃切割"
		},

		damage: 60,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card