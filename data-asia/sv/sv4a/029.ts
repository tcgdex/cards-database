import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "オドリドリ"
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	dexId: [741],
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "情熱的に 踊るさまが パルデアの 人々の 気質に 合うのか 非常に 人気だ。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "パッションダンス"
		},

		effect: {
			ja: "自分の番に1回使える。自分のバトル場の進化ポケモンのHPを「20」回復する。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "はばたく"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card