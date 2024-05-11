import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		ja: "フライゴンV"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Grass", "Fighting"],

		name: {
			ja: "すなしぶき"
		},

		damage: 70
	}, {
		cost: ["Grass", "Fighting", "Fighting", "Colorless"],

		name: {
			ja: "ドラゴンインパルス"
		},

		damage: "160＋",

		effect: {
			ja: "相手のバトルポケモンが「ポケモンVMAX」なら、160ダメージ追加。その場合、このポケモンについているエネルギーを3個選び、トラッシュする。"
		}
	}],

	retreat: 2
}

export default card