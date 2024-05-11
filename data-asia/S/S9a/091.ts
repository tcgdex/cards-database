import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒスイ ダイケンキVSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	stage: "VMAX",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "むじひなやいば"
		},

		damage: "110＋",

		effect: {
			ja: "相手のバトルポケモンにダメカンがのっているなら、110ダメージ追加。"
		}
	}, {
		name: {
			ja: "特性"
		}
	}, {
		name: {
			ja: "ザンゲツスター"
		},

		effect: {
			ja: "自分の番に使える。相手のポケモン1匹に、ダメカンを4個のせる。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card