import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニドキング"
	},

	illustrator: "Misaki Hashimoto",
	category: "Pokemon",
	dexId: [34],
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "力自慢の ポケモン。 太い 尻尾と ダイヤをも 砕く ツノを 駆使して 豪快に 戦う。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "はりきりキング"
		},

		effect: {
			ja: "自分の場に「ニドクイン」がいるなら、このポケモンがワザを使うためのエネルギーは、すべてなくなる。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ベノムインパクト"
		},

		damage: 190,

		effect: {
			ja: "相手のバトルポケモンをどくにする。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3
}

export default card