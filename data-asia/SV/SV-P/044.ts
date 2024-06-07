import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "利牙魚"
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		'zh-tw': "擁有銳利的牙齒和結實的下巴。船員們絕對不會去 靠近利牙魚棲息的地方。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "銳利之牙"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card