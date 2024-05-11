import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藍蟾蜍"
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "透過發出足以造成頭痛的音波來充分削弱獵物之後，用黏糊糊的舌頭將其捉住。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "轉轉標誌"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
