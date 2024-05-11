import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		ja: "シェイミVSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Grass"],
	stage: "VMAX",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "リベンジバースト"
		},

		damage: "120＋",

		effect: {
			ja: "相手がすでにとったサイドの枚数×40ダメージ追加。"
		}
	}, {
		name: {
			ja: "特性"
		}
	}, {
		name: {
			ja: "スターブルーム"
		},

		effect: {
			ja: "自分の番に使える。自分のベンチのポケモン全員のHPを、それぞれ「120」回復する。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card