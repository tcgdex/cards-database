import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咚咚鼠"
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "由於發電的能力不強，因此會從插座或其他的電氣寶可夢那裡偷電。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咚咚閃光"
		},

		effect: {
			'zh-tw': "若對手剩餘獎賞卡的張數為1張，則增加60點傷害，並將對手的戰鬥寶可夢【混亂】。"
		},

		damage: "20+",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card