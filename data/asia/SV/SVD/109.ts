import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "纏紅鶴"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'zh-tw': "擁有被稱為同步的習性，因此攻擊時整個群體會 有條不紊地一起衝過來。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "羽擊"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "急降"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到20點傷害。"
		},

		damage: 110,
		cost: ["Colorless", "Colorless", "Colorless"]
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
	regulationMark: "G"
}

export default card