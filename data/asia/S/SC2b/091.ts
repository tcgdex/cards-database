import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "騎士蝸牛"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'zh-tw': "搶走小嘴蝸的殼，將自己全副武裝。在伽勒爾地區，騎士蝸牛非常受到人們喜愛。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "連斬"
		},

		effect: {
			'zh-tw': "擲3次硬幣。若出現1次正面，則增加20點傷害。若出現2次正面，則增加70點傷害。若全部為正面，則增加140點傷害。"
		},

		damage: "10+",
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "硬殼攻擊"
		},

		damage: 60,
		cost: ["Metal", "Colorless"]
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
	regulationMark: "D"
}

export default card
