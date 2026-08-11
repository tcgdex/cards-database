import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "岩殿居蟹"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "十字剪"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加60點傷害。"
		},

		damage: "30+",
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'zh-tw': "頭突"
		},

		damage: 130,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card