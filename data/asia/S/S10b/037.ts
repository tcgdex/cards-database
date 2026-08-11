import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "幼基拉斯"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'zh-tw': "誕生於地底深處。把周圍的泥土都吃光後，就會出現在地上變成蛹。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "碎岩"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加10點傷害。"
		},

		damage: "10+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card