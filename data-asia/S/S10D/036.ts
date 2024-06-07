import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "戰槌龍"
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	description: {
		'zh-tw': "擅長頭錘的古代寶可夢。 因為大腦真的很小，所以也有說法 認為牠是因為太笨而滅亡的。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "魯莽頭擊"
		},

		damage: 60,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "侏儸紀錘"
		},

		effect: {
			'zh-tw': "若對手的手牌為3張以下，則這個招式失敗。"
		},

		damage: 240,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card