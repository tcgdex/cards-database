import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 狙射樹梟"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	description: {
		'zh-tw': "為抵抗洗翠的嚴寒氣候，羽毛的芯中含有空氣，因而能夠防寒。 由此可見環境會對進化產生影響。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "深入鉤爪"
		},

		effect: {
			'zh-tw': "造成對手的戰鬥寶可夢身上放置的傷害指示物的數量×30點傷害。"
		},

		damage: "30×"
	}, {
		name: {
			'zh-tw': "筆直箭"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到80點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card