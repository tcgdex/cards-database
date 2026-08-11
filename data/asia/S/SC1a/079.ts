import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 哭哭面具"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "刻有詛咒的黏土板附在了哭哭面具上。據說會吸收怨念的能量。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "突擊"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card