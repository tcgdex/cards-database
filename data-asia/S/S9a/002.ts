import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "臭臭花",
		ja: "クサイハナ"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "雌蕊會散發一種極其強烈的惡臭， 能讓２公里外的人昏倒。",
		ja: "めしべが 放つ とてつもなく 臭い においは ２キロ先まで とどき 気を 失わせる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "吸取",
			ja: "すいとる"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			ja: "このポケモンのHPを「30」回復する。"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [44],

	thirdParty: {
		cardmarket: 609711
	}
}

export default card