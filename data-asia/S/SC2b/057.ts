import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙漠蜻蜓"
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'zh-tw': "因為總是位於自己引發的沙暴中心，所以是極少現身於人前的寶可夢。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "沙之迷宮"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手的戰鬥寶可夢無法撤退。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "沙漠噴湧"
		},

		effect: {
			'zh-tw': "將場上對手的競技場卡丟棄。有丟棄的情況下，在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		},

		damage: 130,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
