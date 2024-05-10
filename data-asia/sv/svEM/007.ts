import { Card } from "../../../interfaces"
import Set from "../svEM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "木棉球"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "將木棉球和白蓬蓬的棉花混合後編織出的布料極其精緻， 因此常被高級品牌選用。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "浮躁攻擊"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。"
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card