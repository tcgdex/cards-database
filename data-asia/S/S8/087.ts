import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "稚山雀"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "嬌小的體型讓牠能敏捷地飛翔。攻其不備的戰法將體型巨大的對手玩弄於股掌之間。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "亂擊"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。"
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card