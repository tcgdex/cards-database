import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "河馬獸"
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'zh-tw': "生氣的時候非常凶暴。會噴出儲存在體內的沙子來引發沙塵暴。"
	},

	stage: "Stage1",

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card