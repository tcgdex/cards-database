import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "摔角鷹人"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "飛身頓足"
		},

		effect: {
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的特殊能量，將其丟棄。"
		},

		damage: 20,
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
	regulationMark: "E"
}

export default card