import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咬咬龜"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		'zh-tw': "會用頭上硬如岩石的角攻擊敵人。趁其不備之時大口咬住對方，一旦咬住便再也不會鬆口。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞擊"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "咬住"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card