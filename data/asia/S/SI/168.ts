import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "迷唇姐"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "雙重抽出"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出2張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "眩目舞"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card