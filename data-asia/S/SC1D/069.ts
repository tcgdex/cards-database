import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "天然鳥"
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "人們相信牠之所以幾乎不動也不叫地靜靜待著，是因為牠正注視著過去和未來。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "能量扭曲"
		},

		effect: {
			'zh-tw': "選擇1個對手的備戰寶可夢身上附加的能量，改附於對手的戰鬥寶可夢身上。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "精神強念"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。"
		},

		damage: "10+",
		cost: ["Psychic"]
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
	regulationMark: "D"
}

export default card
