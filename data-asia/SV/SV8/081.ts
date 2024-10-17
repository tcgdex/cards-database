import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "シャリタツex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Water"],

		name: {
			ja: "ふいうちポンプ"
		},

		damage: 100,

		effect: {
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。"
		}
	}, {
		cost: ["Fire", "Water", "Darkness"],

		name: {
			ja: "シナバールアー"
		},

		effect: {
			ja: "自分の山札を上から10枚見て、その中からポケモンを好きなだけ選び、ベンチに出す。残りのカードは山札にもどして切る。"
		}
	}],

	retreat: 1
}

export default card