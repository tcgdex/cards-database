import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咕咕"
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "總是用單腳站立。由於換腳的速度太快，很難用肉眼看清換腳的瞬間。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "送回"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "翅膀攻擊"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card