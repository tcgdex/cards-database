import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烈雀"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		'zh-tw': "翅膀很短，無法長距離飛行。總是不停地四處跳來跳去，忙著啄食蟲寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "啄"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card