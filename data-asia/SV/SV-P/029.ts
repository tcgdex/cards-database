import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "故勒頓"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "牠似乎就是古老的探險記裡 提到的翼大王的真面目。 據記載，牠曾以拳頭擊裂大地。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "利爪劈擊"
		},

		damage: 70,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "亂暴獠牙"
		},

		effect: {
			'zh-tw': "選擇3個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 190,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card