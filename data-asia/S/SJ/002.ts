import { Card } from "../../../interfaces"
import Set from "../SJ"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "圓絲蛛"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "牙齒的毒性並不強烈，但用來削弱那些掛在蛛網上 無法動彈的獵物是綽綽有餘。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "垂吊"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "刺刺痛痛"
		},

		damage: 20,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card