import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大顎蟻"
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'zh-tw': "牠在沙漠中建造的巢穴造型就像是研缽一樣。一旦掉進去就再也逃不出來了。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "大地鼓動"
		},

		effect: {
			'zh-tw': "若場上有競技場卡，則增加10點傷害。"
		},

		damage: "10+",
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
