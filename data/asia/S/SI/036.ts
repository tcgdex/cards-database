import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "啪咚猴"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'zh-tw': "打著激烈的節拍戰鬥時， 由於過於忘我，甚至不會 意識到自己已經把對手打昏了。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "拍落"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，選擇1張對手的手牌，將其丟棄。"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card