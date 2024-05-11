import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龜腳腳"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'zh-tw': "２隻龜腳腳會在海邊找一塊大小合適的岩石，附在上面一起生活。漲潮的時候會互相合作尋找食物。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "二連劈"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×50點傷害。"
		},

		damage: "50×",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card