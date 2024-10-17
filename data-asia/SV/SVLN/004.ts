import { Card } from "../../../interfaces"
import Set from "../SVLN"

const card: Card = {
	set: Set,

	name: {
		ja: "マリルリ"
	},

	illustrator: "Orca",
	category: "Pokemon",
	dexId: [184],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "じっと 耳を すますと 激しい 流れの 川の 中に なにが いるのか 聞き分けられる。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "きらきらシャボン"
		},

		effect: {
			ja: "自分の場に「テラスタル」のポケモンがいるなら、このポケモンが「すてみタックル」を使うためのエネルギーは、エネルギー1個になる。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Psychic", "Psychic"],

		name: {
			ja: "すてみタックル"
		},

		damage: 230,

		effect: {
			ja: "このポケモンにも50ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	rarity: "None"
}

export default card