import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "月亮伊布"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		'zh-tw': "在滿月之夜或是興奮的時候，牠身上圈圈一樣的花紋就會發出金黃色的光。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "暗中奇襲"
		},

		effect: {
			'zh-tw': "對手的身上放置有傷害指示物的1隻寶可夢受到60點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "月亮幻想"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 80,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card