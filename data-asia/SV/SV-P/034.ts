import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "泥泥鰍"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "２根鬍子是靈敏的雷達。即使在因為泥濘而渾濁的水中，也能偵查到獵物的位置。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "躲藏"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		},

		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "擲泥"
		},

		damage: 20,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card