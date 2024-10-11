import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニューラ"
	},

	illustrator: "Krgc",
	rarity: "Common",
	category: "Pokemon",
	dexId: [215],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "ずる賢く １匹が 親を 誘き寄せ もう１匹が タマゴを 取るという チームプレーも 見せる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "いあいぎり"
		},

		damage: 10
	}, {
		cost: ["Water", "Water"],

		name: {
			ja: "つめよる"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card