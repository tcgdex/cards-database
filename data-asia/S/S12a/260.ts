import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		ja: "オリジンディアルガVSTAR"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 280,
	types: ["Metal"],
	stage: "VMAX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "メタルブラスト"
		},

		damage: "40＋",

		effect: {
			ja: "このポケモンについているエネルギーの数×40ダメージ追加。"
		}
	}, {
		cost: ["Metal", "Metal", "Metal", "Metal", "Colorless"],

		name: {
			ja: "スタークロノス"
		},

		damage: 220,

		effect: {
			ja: "この番が終わったら、もう1回自分の番を始める。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 3
}

export default card