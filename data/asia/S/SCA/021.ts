import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "水水獺"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'zh-tw': "用腹部的扇貝貝戰鬥。擋住攻擊後，能迅速地斬切對手反擊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "水槍"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "硬殼攻擊"
		},

		damage: 20,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card