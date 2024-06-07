import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "君主蛇VSTAR"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "皇家攪拌"
		},

		effect: {
			'zh-tw': "選擇自己的場上寶可夢身上附加的任意數量的能量，以任意方式改附於自己的寶可夢身上。"
		},

		damage: 190,
		cost: ["Grass", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]星星旋繞"
		},

		effect: {
			'zh-tw': "造成這隻寶可夢身上附加的能量的數量×60點傷害。將這隻寶可夢與備戰寶可夢互換。[對戰中，己方只可使用1次【VSTAR】力量。]"
		},

		damage: "60×",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "F"
}

export default card