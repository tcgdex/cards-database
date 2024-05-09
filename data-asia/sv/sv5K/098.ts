import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ウガツホムラex"
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
			ja: "ヒートブラスト"
		},

		damage: 60
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "れっかばくしん"
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