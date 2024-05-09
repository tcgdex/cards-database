import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "レントラーex"
	},

	category: "Pokemon",
	rarity: "Double rare",
	illustrator: "PLANETA Yamashita",
	hp: 310,
	types: ["Lightning"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "つきさすがんこう"
		},

		damage: 120,

		effect: {
			ja: "相手の手札を見て、その中からカードを1枚選び、トラッシュする。"
		}
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			ja: "ボルトストライク"
		},

		damage: 250,

		effect: {
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card
