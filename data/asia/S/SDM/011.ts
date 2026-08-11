import { Card } from "../../../interfaces"
import Set from "../SDM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大蔥鴨"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		'zh-tw': "會將翅膀所拿的莖狀植物當成劍一般去劈砍對手。 在非常時期會拿它當作食物。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "用蔥敲打"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×10點傷害。"
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
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