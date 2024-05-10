import { Card } from "../../../interfaces"
import Set from "../svEM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蛋蛋"
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "非得湊齊６隻才會有安全感。那怕只是少了１隻，都會立刻 變得很膽小，隨時想要逃跑。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "催眠術"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "滾動衝撞"
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

	retreat: 2,
	regulationMark: "G"
}

export default card