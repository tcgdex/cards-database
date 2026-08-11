import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "樹才怪"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "偽裝成樹木，卻連幼童也難以騙過。 體表並非樹皮，觸感彷若岩石。 值得一提的是，此寶可夢極其怕水。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "速逃"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則這隻寶可夢【撤退】所需的能量全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "捨身衝撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 90,
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