import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大王銅象"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 200,
	types: ["Metal"],

	description: {
		'zh-tw': "自尊心強，脾氣刁鑽。 皮膚的綠色越是鮮豔， 就越受到同伴的尊敬。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "‌‌[特性]爆大身軀"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手無法從手牌使出競技場卡。"
		}
	}, {
		name: {
			'zh-tw': "鼻之金勾臂"
		},

		effect: {
			'zh-tw': "若希望，增加100點傷害。這個情況下，在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: "130+",
		cost: ["Metal", "Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card