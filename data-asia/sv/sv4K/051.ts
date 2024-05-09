import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "モルペコ"
	},

	illustrator: "Cona Nitanda",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [877],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "空腹ホルモンで 性質が 変化。 お腹が 満たされるまで 悪の 限りを つくす。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "はらへりダッシュ"
		},

		effect: {
			ja: "このポケモンにエネルギーがついていないなら、このポケモンのにげるためのエネルギーは、すべてなくなる。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "エネしゃりん"
		},

		damage: 70,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、ベンチポケモン1匹につけ替える。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card