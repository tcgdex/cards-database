import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 大狃拉V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "毒之爪"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		}
	}, {
		name: {
			'zh-tw': "剋命爪"
		},

		effect: {
			'zh-tw': "造成對手的戰鬥寶可夢處於特殊狀態的數量×80點傷害。"
		},

		damage: "80×",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "F"
}

export default card