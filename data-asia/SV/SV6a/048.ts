import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "喵喵"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "非常喜歡耀眼的發光物。 找到發光物時，不知為何 額頭的金幣也會跟著發光。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "亂抓"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×20點傷害。"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common"
}

export default card