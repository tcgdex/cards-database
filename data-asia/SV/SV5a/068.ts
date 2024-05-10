import { Card } from "../../../interfaces"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		ja: "チャデス"
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	dexId: [1012],
	hp: 30,
	types: ["Grass"],

	description: {
		ja: "ヤバチャの リージョンフォームに 見えるが まったく 関係のない ポケモンと 最近 判明した。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "くらがくれ"
		},

		effect: {
			ja: "このポケモンは、ベンチにいるかぎり、相手のポケモンからワザのダメージや効果を受けない。"
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ひっかける"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card