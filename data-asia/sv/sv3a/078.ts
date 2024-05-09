import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "フーパex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "エナジークラッシュ"
		},

		damage: "50×",

		effect: {
			ja: "相手のポケモン全員についているエネルギーの数×50ダメージ。"
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			ja: "バンデットフィスト"
		},

		damage: 200,

		effect: {
			ja: "次の自分の番、このポケモンは「バンデットフィスト」が使えない。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card