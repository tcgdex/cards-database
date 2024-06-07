import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "花岩怪"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "因為５００年前作惡多端，導致身體被綁縛在楔石的裂縫裡。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "亡者呐喊"
		},

		effect: {
			'zh-tw': "將與對手棄牌區的寶可夢卡張數相同數量的傷害指示物，以任意方式放置在對手的寶可夢身上。然後，將對手棄牌區的寶可夢卡全部放回對手的牌庫並重洗。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "鬼火"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card