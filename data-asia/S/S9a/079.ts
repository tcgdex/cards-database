import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ガブリアスV"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 200,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water", "Fighting", "Colorless"],

		name: {
			ja: "ドラゴンクロー"
		},

		damage: 120
	}, {
		cost: ["Water", "Fighting", "Fighting", "Colorless"],

		name: {
			ja: "ソニックストライク"
		},

		effect: {
			ja: "このポケモンについているエネルギーを3個トラッシュし、相手のポケモン1匹に、220ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		}
	}],

	retreat: 0
}

export default card