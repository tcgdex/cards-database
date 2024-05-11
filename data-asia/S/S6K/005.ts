import { Card } from "../../../interfaces"
import Set from "../S6K"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "橡實果"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "會將頭頂黏在樹枝上懸掛著。也有被大風吹落的時候。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "驚嚇"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，從對手的手牌選擇1張，在看過那張卡正面後放回對手的牌庫並重洗。"
		},

		damage: 10,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card