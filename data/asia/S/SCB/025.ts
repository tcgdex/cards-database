import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "焰后蜥"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "據說焰后蜥之間在爭鬥時，是透過比拼誰帶著更多隻雄性夜盜火蜥來定勝負的。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "蠱惑"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "燒壞"
		},

		effect: {
			'zh-tw': "造成對手的戰鬥寶可夢處於特殊狀態的數量×90點傷害。"
		},

		damage: "90×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card