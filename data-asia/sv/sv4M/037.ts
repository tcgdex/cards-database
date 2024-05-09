import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "デカヌチャン"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [959],
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "１００キロを 超える ハンマーを 軽々 振りまわして 欲しいものを 奪い取り 棲み処へと 持ち帰る。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "はかいのいちげき"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
		}
	}, {
		cost: ["Psychic"],

		name: {
			ja: "ごうきんハンマー"
		},

		damage: "60＋",

		effect: {
			ja: "このポケモンにエネルギーがついているなら、120ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card