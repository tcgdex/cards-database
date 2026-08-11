import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毽子草"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		'zh-tw': "會隨風飄送。據說當毽子草開始聚集在山野上，就代表春天快要到了。"
	},

	stage: "Basic",

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "E"
}

export default card