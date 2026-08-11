import { Card } from "../../../interfaces"
import Set from "../SH"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "薩戮德"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "生長在身上的藤蔓斷落後會化為土壤的養分，孕育森林裡的各種植物。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "抓"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "暴亂之鞭"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。"
		},

		damage: "40+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card