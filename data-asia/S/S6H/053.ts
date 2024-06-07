import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多邊獸Ⅱ"
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'zh-tw': "雖然在宇宙空間裡也不會死亡，但在無重力的環境下，牠根本無法順利活動身體。"
	},

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