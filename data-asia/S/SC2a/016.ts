import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "時拉比"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "擁有能夠穿越時光的力量。在許多時代都留下了將牠視為森林之神的紀錄。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "能量壓制"
		},

		effect: {
			'zh-tw': "造成對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。"
		},

		damage: "30×",
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "奇幻綻放"
		},

		effect: {
			'zh-tw': "從自己的牌庫，選擇自己的所有備戰寶可夢進化而來的卡各1張，放置於各自身上完成進化。並且重洗牌庫。"
		},

		cost: ["Lightning", "Psychic"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
