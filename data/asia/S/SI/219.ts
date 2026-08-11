import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "幕下力士"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "據說為了培育強大的幕下力士， 訓練家們會製作一種 傳統的火鍋料理。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撞倒"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "頭突"
		},

		damage: 60,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card