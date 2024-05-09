import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ワタッコ"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	dexId: [189],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "季節風に 乗り 旅をする。 綿胞子が 尽きるとき 旅と ワタッコの 一生は 終わる。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ふわっとよける"
		},

		effect: {
			ja: "このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。"
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "わたげのかぜ"
		},

		damage: 60,

		effect: {
			ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card