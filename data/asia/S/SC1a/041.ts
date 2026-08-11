import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 太陽珊瑚"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'zh-tw': "常出現在從前曾是大海的地方。如果不小心錯把牠當成石頭踢，就會遭到牠的詛咒。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "詛咒水滴"
		},

		effect: {
			'zh-tw': "將3個傷害指示物以任意方式放置於對手的寶可夢身上。"
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card