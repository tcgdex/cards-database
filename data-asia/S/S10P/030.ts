import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "艾姆利多"
	},

	illustrator: "zig",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "在湖底沉睡。 但據說牠的靈魂會跑出來， 在水面徘徊飛行。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "意識之帳"
		},

		effect: {
			'zh-tw': "若自己的場上有「由克希」「亞克諾姆」，則自己的所有寶可夢的弱點全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "意念頭錘"
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
	regulationMark: "F"
}

export default card