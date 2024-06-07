import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "耿鬼"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "滿月的夜晚，如果影子自己動起來並露出笑容， 那肯定是耿鬼搞的鬼。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "奈落後門"
		},

		effect: {
			'zh-tw': "若這張卡在棄牌區，則在自己的回合時可使用1次。將這張卡放置於備戰區。然後，在這隻寶可夢身上放置3個傷害指示物。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "尖嘯陣"
		},

		effect: {
			'zh-tw': "將與對手的備戰寶可夢的數量×2個的相同數量的傷害指示物，放置於對手的戰鬥寶可夢身上。"
		},

		cost: ["Psychic"]
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
	regulationMark: "F"
}

export default card