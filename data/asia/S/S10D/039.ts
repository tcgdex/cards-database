import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "圓絲蛛"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		'zh-tw': "牙齒的毒性並不強烈， 但用來削弱那些掛在蛛網上 無法動彈的獵物是綽綽有餘。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "毒針"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card