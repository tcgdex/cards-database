import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多邊獸Ⅱ"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'zh-tw': "#N/A"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "廢物攻擊"
		},

		effect: {
			'zh-tw': "造成雙方的放逐區的「寶可夢道具」卡的張數×20點傷害。"
		},

		damage: "20×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card