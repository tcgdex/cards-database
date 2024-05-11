import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "暴雪王"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'zh-tw': "會引發暴風雪的寶可夢。只要牠搖動巨大的身體，周圍立刻會變得一片雪白。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "新月生長"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【超】能量卡，附於自己的寶可夢身上。並且重洗牌庫。若在後攻玩家的最初回合使用，則可附上的張數改為最多3張，附於自己的1隻寶可夢身上。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "光子鐳射"
		},

		effect: {
			'zh-tw': "若自己的場上的能量有5個以上，則增加90點傷害。"
		},

		damage: "30+",
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card