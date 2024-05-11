import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "怪力VMAX"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "復仇光炮"
		},

		effect: {
			'zh-tw': "若自己的備戰寶可夢身上放置有傷害指示物，則增加140點傷害。"
		},

		damage: "80+",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "超極巨會心一擊"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「超極巨會心一擊」。"
		},

		damage: 240,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card