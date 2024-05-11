import { Card } from "../../../interfaces"
import Set from "../SLD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "達克萊伊V",
		ja: "ダークライV"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "暗之風",
			ja: "やみのかぜ"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			'zh-tw': "暗黑洞",
			ja: "ダークホール"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			ja: "相手のバトルポケモンをねむりにする。"
		},

		damage: 130,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card