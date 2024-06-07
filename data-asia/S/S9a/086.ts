import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒスイ ジュナイパーVSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],
	stage: "VMAX",

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "サマーソルトフェザー"
		},

		damage: "160＋",

		effect: {
			ja: "のぞむなら、自分の手札からエネルギーを3枚までトラッシュし、その枚数×30ダメージ追加。"
		}
	}, {
		name: {
			ja: "特性"
		}
	}, {
		name: {
			ja: "フウウンスター"
		},

		effect: {
			ja: "自分の番に使える。自分の手札が8枚になるように、山札を引く。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card