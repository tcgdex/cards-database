import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "好啦魷"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		'zh-tw': "會讓敵人看到自己閃爍的發光體來讓對方喪失戰意， 然後趁機逃之夭夭。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "迴轉攻擊"
		},

		damage: 20,
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
	regulationMark: "E"
}

export default card