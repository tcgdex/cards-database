import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "愛管侍V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "貼心"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。將自己的戰鬥寶可夢恢復「20」HP。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "精神強念"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×60點傷害。"
		},

		damage: "10+",
		cost: ["Psychic", "Colorless", "Colorless"]
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
	regulationMark: "D"
}

export default card