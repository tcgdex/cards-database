import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "青銅鐘"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "金屬轉移"
		},

		effect: {
			'zh-tw': "在自己的回合時，可不限次數使用。選擇1個自己的場上寶可夢身上附加的【鋼】能量，改附於自己的其他寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "意念頭錘"
		},

		damage: 70,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card