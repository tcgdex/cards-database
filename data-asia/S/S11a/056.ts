import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "青綿鳥"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		'zh-tw': "絲綿般的翅膀會鎖住空氣，呈現蓬蓬鬆鬆的觸感。牠總是會細心地打理翅膀。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "連續旋轉"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×20點傷害。"
		},

		damage: "20×",
		cost: ["Colorless"]
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
	regulationMark: "F"
}

export default card