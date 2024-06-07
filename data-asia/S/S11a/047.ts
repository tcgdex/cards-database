import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "齒輪組"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		'zh-tw': "如果認真起來，大齒輪外圈的齒輪會和小齒輪完全接合。此時轉速將會大幅提升。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "齒輪飛盤"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×80點傷害。"
		},

		damage: "80×",
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
	regulationMark: "F"
}

export default card