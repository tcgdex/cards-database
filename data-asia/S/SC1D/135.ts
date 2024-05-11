import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "泡沫栗鼠"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "用尾巴來清掃灰塵。雖說能幫忙打掃是件好事，但牠的潔癖也會讓人感到棘手。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "擺尾拍擊"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
