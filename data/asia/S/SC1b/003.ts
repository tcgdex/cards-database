import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巴大蝶"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		'zh-tw': "當牠飛快地拍動翅膀，帶有劇毒的鱗粉就會隨著風向這裡飄過來。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "恐慌毒"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】、【灼傷】與【混亂】。"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "利刃之風"
		},

		damage: 80,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
