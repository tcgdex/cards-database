import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夢夢蝕"
	},

	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "在牠冒出黑黑的煙霧時，還是不要接近牠為妙，否則惡夢將會成真。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "熟睡波動"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。因這個【睡眠】的擲硬幣次數改為2次，若沒有全部為正面則無法恢復。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "昏睡爆破"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢【睡眠】，則增加120點傷害。"
		},

		damage: "10+",
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

	retreat: 3,
	regulationMark: "D"
}

export default card
