import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		ja: "リザードンV"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "やきつくす"
		},

		damage: 90,

		effect: {
			ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。"
		}
	}, {
		cost: ["Fire", "Fire", "Fire", "Colorless"],

		name: {
			ja: "ヒートブラスト"
		},

		damage: 180
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card