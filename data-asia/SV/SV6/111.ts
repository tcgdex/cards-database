import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "可多拉"
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		'zh-tw': "可多拉棲息的山區有 豐富的泉水和鐵礦石， 因此常會與人類起紛爭。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "鋼鐵衝撞"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到20點傷害。"
		},

		damage: 40,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "金屬爪"
		},

		damage: 60,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card