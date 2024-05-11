import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "泥偶巨人"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'zh-tw': "古代人城堡的牆壁裡那像炮台一樣的底座是為了 讓泥偶巨人發射光束而建的。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "大手"
		},

		effect: {
			'zh-tw': "增加自己的手牌的張數×10點傷害。"
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "百萬噸重拳"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card