import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夠讚狗"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "動不動就會怒火沖天的 粗暴傢伙。會揮甩脖子的鎖鏈 一股腦兒地擊碎東西。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "腎上腺力量"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有【惡】能量卡，則這隻寶可夢的最大HP「+100」，這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+100」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "好拳"
		},

		damage: 70,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card