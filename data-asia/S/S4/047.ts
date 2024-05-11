import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "滾滾蝙蝠"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "在洞窟中，如果抬頭看到牆壁上留著心形的痕跡，就代表滾滾蝙蝠住在那裡。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "赤手空拳音波"
		},

		effect: {
			'zh-tw': "對手的所有寶可夢各受到30點傷害。若自己的手牌有1張卡以上，則這個招式失敗。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Psychic"]
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
	regulationMark: "D"
}

export default card