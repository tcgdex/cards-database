import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蒂安希"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "在雙手的間隙中壓縮空氣中的碳元素，轉瞬間變出許多鑽石。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "璀璨護幕"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，自己的所有寶可夢受到對手的寶可夢招式的傷害「-30」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "感知之光"
		},

		effect: {
			'zh-tw': "在這個回合，若從手牌使出了支援者卡，則增加70點傷害。"
		},

		damage: "50+",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
