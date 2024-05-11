import { Card } from "../../../interfaces"
import Set from "../SI"

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
		'zh-tw': "會用電流刺激肌肉，所以能 迅速行動。電流同時也能幫助 肌肉放鬆，讓酸痛迅速痊癒。"
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