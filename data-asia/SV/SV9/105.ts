import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "リーリエのアブリボン"
	},

	illustrator: "saino misaki",
	rarity: "None",
	category: "Pokemon",
	dexId: [743],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "落ちこんでいる 人や ポケモンの 気持ちを 感じ取っては 手作りの 花粉団子で 元気づけたりする。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "おさそいウインク"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手の手札を見て、その中からたねポケモンを好きなだけ選び、相手のベンチに出す。"
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "マジカルショット"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0
}

export default card