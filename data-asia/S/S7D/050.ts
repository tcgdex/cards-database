import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "懶人獺"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "每天只要能吃上３片葉子就滿足了。除此之外，牠還能睡上２０個小時。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "揍人後睡覺"
		},

		effect: {
			'zh-tw': "將這隻寶可夢【睡眠】。"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card