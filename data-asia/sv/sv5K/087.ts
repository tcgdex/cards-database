import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ウミトリオex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Lightning"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "トリコロポンプ"
		},

		effect: {
			ja: "自分の手札からエネルギーを3枚までトラッシュし、その枚数×60ダメージを、相手のポケモン1匹に与える。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			ja: "しびれホールド"
		},

		damage: 120,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card