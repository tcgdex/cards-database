import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "布莉姆溫"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "魔女迴旋曲"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。將自己的戰鬥寶可夢與備戰寶可夢互換。然後，對手將對手自己的戰鬥寶可夢與備戰寶可夢互換。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "精神強念"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×50點傷害。"
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
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
	regulationMark: "E"
}

export default card