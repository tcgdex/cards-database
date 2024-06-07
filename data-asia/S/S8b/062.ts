import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "奇魯莉安"
	},

	illustrator: "313",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'zh-tw': "能夠操縱精神力量來扭曲周圍的空間，讓自己看見未來。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "幻想舞步"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張「奇魯莉安」卡，放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card