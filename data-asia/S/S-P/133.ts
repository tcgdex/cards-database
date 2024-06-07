import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小火焰猴"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 50,
	types: ["Fire"],

	description: {
		'zh-tw': "肚子產生的瓦斯在屁股上燃燒。如果身體狀況不好的話，火焰就會變弱。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "火花"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 30,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card