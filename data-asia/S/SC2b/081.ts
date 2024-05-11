import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "盔甲鳥"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'zh-tw': "每次成長都會脫落的羽毛又薄又銳利。古時的戰士將之當作刀來使用。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "金屬武裝"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有「寶可夢道具」，則增加40點傷害。"
		},

		damage: "10+",
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "利刃之風"
		},

		damage: 80,
		cost: ["Metal", "Colorless", "Colorless"]
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
	regulationMark: "D"
}

export default card
