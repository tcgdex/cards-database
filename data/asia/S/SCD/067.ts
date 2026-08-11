import { Card } from "../../../interfaces"
import Set from "../SCD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "泥偶巨人V"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "百萬噸重拳"
		},

		damage: 80,
		cost: ["Psychic", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "倒轉光束"
		},

		effect: {
			'zh-tw': "從對手的進化的戰鬥寶可夢身上，移除1張「進化卡」使其退化。將移除的卡放回對手的手牌。"
		},

		damage: 180,
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"]
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
	regulationMark: "E"
}

export default card