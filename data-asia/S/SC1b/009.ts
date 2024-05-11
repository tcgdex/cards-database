import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "樂天河童"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	description: {
		'zh-tw': "快樂的音樂節奏會讓樂天河童的細胞活性化，使牠發揮出強大的力量。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "洋洋突進"
		},

		effect: {
			'zh-tw': "造成自己已經獲得的獎賞卡的張數×60點傷害。"
		},

		damage: "60×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "超級吸取"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。"
		},

		damage: 120,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
