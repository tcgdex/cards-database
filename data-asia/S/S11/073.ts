import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵啞鈴"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'zh-tw': "會從臀部放出磁力將敵人迅猛地吸到身邊， 再以銳利的爪子刺穿對方。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "磁力抬升"
		},

		effect: {
			'zh-tw': "從自己的牌庫任意選擇1張卡。重洗剩餘牌庫，將所選的卡放回牌庫上方。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "撞擊"
		},

		damage: 20,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card