import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		ja: "リザードンVSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Fire"],
	stage: "VMAX",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ばくれつファイヤー"
		},

		damage: "130＋",

		effect: {
			ja: "このポケモンにダメカンがのっているなら、100ダメージ追加。"
		}
	}, {
		cost: ["Fire", "Fire", "Fire", "Colorless"],

		name: {
			ja: "スターブレイズ"
		},

		damage: 320,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,

	thirdParty: {
		cardmarket: 605866
	}
}

export default card