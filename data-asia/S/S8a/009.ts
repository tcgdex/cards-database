import { Card } from "../../../interfaces"
import Set from "../S8a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "帕路奇亞"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "擁有扭曲空間的能力。在神奧地區的神話裡被描述為神。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "絕對空間"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手無法從手牌使出競技場卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "超頻擊碎"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢「超頻擊碎」的傷害「+80」點。"
		},

		damage: "80+",
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card