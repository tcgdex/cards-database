import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "仙子伊布"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		'zh-tw': "伽勒爾地區的童話中有著美麗的仙子伊布擊退了可怕的龍寶可夢的故事。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "延後踢"
		},

		effect: {
			'zh-tw': "若希望，選擇1個對手的戰鬥寶可夢身上附加的能量，放回對手的手牌。"
		},

		damage: 30,
		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "諧和鞭打"
		},

		effect: {
			'zh-tw': "在這個回合，若從手牌使出了支援者卡，則增加70點傷害。"
		},

		damage: "70+",
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