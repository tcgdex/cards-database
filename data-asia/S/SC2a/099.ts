import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 蛇紋熊"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "一直在奔跑，永遠靜不下來。如果發現了其他的寶可夢，就會故意撞上去挑起事端。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "飛彈針"
		},

		effect: {
			'zh-tw': "擲4次硬幣，造成正面出現的次數×10點傷害。"
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
