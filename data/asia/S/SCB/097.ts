import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "獨劍鞘"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'zh-tw': "獨劍鞘護手上的藍色眼珠是牠的本體。會用陳舊的布吸取人類的精氣。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "伏擊"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。"
		},

		damage: "10+",
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card