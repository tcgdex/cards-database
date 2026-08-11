import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 達摩狒狒"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		'zh-tw': "會把食物裝到頭頂的雪球裡帶回家。在暴風雪的日子會下山來到人類居住的村落。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "暴風雪"
		},

		effect: {
			'zh-tw': "對手的所有備戰寶可夢也各受到10點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 80,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "碎冰頭擊"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「碎冰頭擊」。"
		},

		damage: 170,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
