import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 喵頭目V"
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 200,
	types: ["Metal"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "好心情"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出3張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "寶物猛攻"
		},

		effect: {
			'zh-tw': "造成自己的手牌的張數×20點傷害。"
		},

		damage: "20×",
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
	regulationMark: "F"
}

export default card