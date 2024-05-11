import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超能妙喵"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "耳部游移"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。選擇1個放置於自己的場上寶可夢身上的傷害指示物，改放於對手的場上寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "念動彈"
		},

		damage: 50,
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

	retreat: 1,
	regulationMark: "E"
}

export default card