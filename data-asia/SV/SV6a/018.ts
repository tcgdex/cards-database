import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夜巡靈"
	},

	illustrator: "IKEDA Saki",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "遭到牠鮮紅的獨眼瞪視 並且被吸取生物能量時， 會受到嚴重的寒氣侵襲。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "前往渡魂"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多3張「夜巡靈」，放置於備戰區。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "囈語"
		},

		damage: 30,
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

	retreat: 1,
	regulationMark: "H",
	rarity: "Common"
}

export default card