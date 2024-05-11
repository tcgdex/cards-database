import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 喵頭目"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'zh-tw': "有著十分好戰的性格。頭上像鐵頭盔一樣的東西其實是牠硬化後的體毛。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "掠奪爪"
		},

		effect: {
			'zh-tw': "擲3次硬幣。若出現正面，則查看對手的手牌，選擇其中與正面出現的次數相同數量的訓練家卡，將其丟棄。"
		},

		damage: 20,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "利爪劈擊"
		},

		damage: 90,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card