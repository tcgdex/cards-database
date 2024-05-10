import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "ニューラ",
		'zh-tw': "狃拉"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [215],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "自分が 目立たないよう 暗闇に まぎれて 獲物に 襲いかかる とても ずる賢い ポケモン。",
		'zh-tw': "會潛藏在黑暗中使自己變得不起眼，然後伺機襲擊獵物， 是非常狡詐的寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ツメをたてる",
			'zh-tw': "豎爪"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card