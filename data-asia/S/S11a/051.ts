import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪機雅娜V"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 210,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "齒輪一投"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "特殊鐳射"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有特殊能量，則增加120點傷害。"
		},

		damage: "100+",
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card