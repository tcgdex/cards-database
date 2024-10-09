import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "彷徨夜靈"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說在體內燃燒著的鮮紅獨眼 是彷徨夜靈的本體， 但沒有人親眼見過。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "‌[特性]咒詛炸彈"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次，若使用，則將這隻寶可夢【昏厥】。在對手的1隻寶可夢身上放置5個傷害指示物。"
		}
	}, {
		name: {
			'zh-tw': "鬼火"
		},

		damage: 50,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common"
}

export default card