import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "薩戮德"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'zh-tw': "生長在身上的藤蔓斷落後會化為土壤的養分， 孕育森林裡的各種植物。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "群喚之歌"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張【草】寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。若在後攻玩家的最初回合使用，則可加入手牌的【草】寶可夢卡張數改為最多3張。"
		},

		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "反覆之鞭"
		},

		effect: {
			'zh-tw': "增加這隻寶可夢身上附加的【草】能量的數量×20點傷害。"
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card