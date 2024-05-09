import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ケルディオ"
	},

	illustrator: "satoma",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [647],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "戦う 覚悟を 決めたことで 全身に 気力が みなぎり ケルディオの 姿を 変えた。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "クイックドロー"
		},

		damage: 20,

		effect: {
			ja: "自分の山札を2枚引く。"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "アクアブレード"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card