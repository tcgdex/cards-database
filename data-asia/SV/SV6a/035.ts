import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伊裴爾塔爾"
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "傳說的寶可夢。據說當牠 展開的翅膀與尾羽閃耀紅色光芒時， 就會吸走生物的生命。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "侵蝕之風"
		},

		effect: {
			'zh-tw': "在對手的身上放置有傷害指示物的所有寶可夢身上，各放置2個傷害指示物。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "破壞光束"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 100,
		cost: ["Darkness", "Darkness", "Colorless"]
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
	regulationMark: "H"
}

export default card