import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "逐電犬VMAX"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 320,
	types: ["Lightning"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "雷電風暴"
		},

		effect: {
			'zh-tw': "增加自己的場上寶可夢身上附加的【雷】能量的數量×30點傷害。"
		},

		damage: "30+",
		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			'zh-tw': "極巨伏特"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「極巨伏特」。"
		},

		damage: 230,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card