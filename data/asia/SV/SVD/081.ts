import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "盔甲鳥"
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'zh-tw': "由於牠脫落下來的羽毛能夠製成劍，因此作為 家徽的圖案也很有人氣。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "啄"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "鋼鐵揮砍"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「鋼鐵揮砍」。"
		},

		damage: 120,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card