import { Card } from "../../../interfaces"
import Set from "../SDP"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "雷電炸彈"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢身上附加的【雷】能量全部丟棄。這個情況下，增加120點傷害。"
		},

		damage: "100+",
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card