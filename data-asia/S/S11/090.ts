import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小箭雀"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],

	description: {
		'zh-tw': "婉轉的叫聲是在威嚇對方。對於闖入自己地盤的傢伙 會毫不留情地啄個不停。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "啄"
		},

		damage: 10,
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

	retreat: 0,
	regulationMark: "F"
}

export default card