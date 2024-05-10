import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "猛雷鼓ex"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 240,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "濺射咆哮"
		},

		effect: {
			'zh-tw': "將自己的手牌全部丟棄，從牌庫抽出6張卡。"
		},

		cost: ["Colorless"]
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card