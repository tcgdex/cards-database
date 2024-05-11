import { Card } from "../../../interfaces"
import Set from "../S7R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蘋裹龍"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 80,
	types: ["Dragon"],

	description: {
		'zh-tw': "會用蘋果皮的翅膀飛翔，並吐出強酸性的唾液。能變成蘋果的形狀。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "強酸黏液"
		},

		effect: {
			'zh-tw': "造成對手場上擁有特性的寶可夢的數量×50點傷害。"
		},

		damage: "50×",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "鬥志衝撞"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【V】」，則增加80點傷害。"
		},

		damage: "80+",
		cost: ["Grass", "Fire"]
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card