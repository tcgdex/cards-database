import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "噬沙堡爺"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		'zh-tw': "操縱人們，讓沙山進化為沙堡。詛咒的力量也得到了提升。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "沉沙"
		},

		effect: {
			'zh-tw': "將對手的牌庫上方1張卡丟棄。若這隻寶可夢身上附有「詛咒之鏟」，則再丟棄2張。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "超吸收"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 90,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card