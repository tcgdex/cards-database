import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夜盜火蜥"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "會挑釁獵物並引進狹窄的岩堆裡，接著噴出能造成 頭暈的毒瓦斯後奪其性命。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "瓦斯包圍"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "抓"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card