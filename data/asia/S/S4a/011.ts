import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "索偵蟲"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "總是孜孜不倦地收集情報，所以頭腦相當地聰明，但是力量方面就差了一些。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card