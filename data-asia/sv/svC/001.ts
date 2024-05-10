import { Card } from "../../../interfaces"
import Set from "../svC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘ex"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "皮卡拳"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "極限伏特"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則將這隻寶可夢身上附加的能量全部丟棄。"
		},

		damage: 220,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card