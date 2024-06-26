import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "爬地翅"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		'zh-tw': "與古老書籍裡介紹的一種 叫做爬地翅的生物有著 相似點的神秘寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "鐵碎"
		},

		effect: {
			'zh-tw': "若對手的場上有「未來」寶可夢，則增加120點傷害。"
		},

		damage: "20+",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "粉碎之翼"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 130,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card