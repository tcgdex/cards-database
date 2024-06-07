import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "波克比"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		'zh-tw': "外觀好似一顆蛋，常讓在野外 遇見牠的人誤會蛋自己會動。 純真的笑容有療癒人心的功效。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "幸福之觸"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。將自己的戰鬥寶可夢恢復「10」HP。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "滾動"
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card