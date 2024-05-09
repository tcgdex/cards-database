import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ガルーラ"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [115],
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "子どもの いない ガルーラが 遭難した 人間の 子を 育てていたという 記録がある。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ずつき"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "スパイクドロー"
		},

		damage: 60,

		effect: {
			ja: "自分の山札を2枚引く。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card