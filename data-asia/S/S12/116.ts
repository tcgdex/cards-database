import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		ja: "アンノーンVSTAR"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],
	stage: "VMAX",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "トライパワー"
		},

		damage: "70×",

		effect: {
			ja: "コインを3回投げ、オモテの数×70ダメージ。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "スターサイファー"
		},

		effect: {
			ja: "このポケモンは、場をはなれるまで「相手の場のポケモン全員の弱点は、すべてタイプになる。」という効果の特性を持つ。［弱点は「×2」で計算する。］［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card