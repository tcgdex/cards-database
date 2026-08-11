import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "正電拍拍"
	},

	illustrator: "Megumi Higuchi",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'zh-tw': "能從電線桿上吸取電力。會透過讓體內儲存的電流短路來發出聲音。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "雙電光"
		},

		effect: {
			'zh-tw': "在上個自己的回合，若自己的「負電拍拍」使用了招式，則增加100點傷害。"
		},

		damage: "20+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card