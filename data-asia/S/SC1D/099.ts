import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瓦斯彈"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "身體裡充滿了毒氣。會為了尋求廚餘垃圾的腐敗氣味而來到垃圾場。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "瓦斯包圍"
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
