import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藍鴉"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		'zh-tw': "歷經無數次艱難的戰鬥後，牠學會了該如何正確地判斷敵人的力量。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "亂擊"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×30點傷害。"
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
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