import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多龍巴魯托"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	description: {
		'zh-tw': "讓多龍梅西亞住在自己角上的洞裡。戰鬥開始後會用音速 將多龍梅西亞發射出去。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "龍之發射器"
		},

		effect: {
			'zh-tw': "將最多與對手的場上寶可夢相同數量的自己的備戰區的「多龍梅西亞」卡丟棄，選擇與丟棄的數量相同數量的對手的寶可夢。然後，對所選的所有寶可夢不計算弱點・抵抗力，各造成100點傷害。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "陰森射擊"
		},

		damage: 120,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card