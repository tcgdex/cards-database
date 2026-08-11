import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "坐騎山羊"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'zh-tw': "在山岳地帶生活。互相撞角比誰力氣大，勝利者將成為群體的領袖。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "飛葉快刀"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'zh-tw': "猛撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 160,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card