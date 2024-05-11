import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "索羅亞克"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "據說當牠的棲息地快要暴露在人類面前時，牠會製造出幻影，讓人在森林裡不斷徘徊。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "雙重爪"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×40點傷害。"
		},

		damage: "40×",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "暗黑爆破"
		},

		damage: 100,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card