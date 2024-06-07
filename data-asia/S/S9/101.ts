import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		ja: "シェイミV"
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "はばたく"
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "リベンジバースト"
		},

		damage: "60＋",

		effect: {
			ja: "相手がすでにとったサイドの枚数×40ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card