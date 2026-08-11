import { Card } from "../../../interfaces"
import Set from "../S6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "花葉蒂"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "會把自己的力量分給花，用心地加以照料。絕不會原諒破壞花壇的傢伙。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "妖精之風"
		},

		damage: 20,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "雙重旋轉"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×50點傷害。"
		},

		damage: "50×",
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card