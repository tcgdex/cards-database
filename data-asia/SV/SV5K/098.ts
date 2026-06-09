import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ウガツホムラex",
		ko: "꿰뚫는화염 ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ヒートブラスト",
			ko: "히트블라스트"
		},

		damage: 60
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "れっかばくしん",
			ko: "열화맥진"
		},

		damage: 260,

		effect: {
			ja: "このワザを使ったなら、このポケモンは、バトル場をはなれるまで「れっかばくしん」が使えない。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card