import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多邊獸Ⅱ"
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "三重攻擊"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×30點傷害。"
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card