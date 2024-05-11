import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		ja: "スターミーV"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 190,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "スピードスター"
		},

		damage: 50,

		effect: {
			ja: "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。"
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			ja: "エナジースパイラル"
		},

		damage: "50×",

		effect: {
			ja: "相手の場のポケモンについているエネルギーの数×50ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 0
}

export default card