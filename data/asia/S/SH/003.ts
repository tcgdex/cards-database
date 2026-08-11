import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "幼棉棉"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "會隨著微風一邊轉圈圈一邊愉快地唱歌。許多人因為喜歡這可愛的模樣而培育牠。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "樹葉"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card