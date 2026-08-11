import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "噗噗豬"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'zh-tw': "能用黑珍珠增強自己的精神力量。會用奇異的舞步操縱對手的心。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "眩目舞"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "力量寶石"
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Colorless"]
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