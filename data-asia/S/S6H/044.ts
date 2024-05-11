import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙螺蟒VMAX"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 320,
	types: ["Fighting"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "超極巨旋風氣旋"
		},

		effect: {
			'zh-tw': "選擇自己的場上寶可夢身上附加的任意數量的能量，以任意方式改附於自己的寶可夢身上。"
		},

		damage: 180,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card