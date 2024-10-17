import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "オコリザル"
	},

	illustrator: "Felicia Chen",
	rarity: "Common",
	category: "Pokemon",
	dexId: [57],
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "ある研究者の 学説では モンスターボールの 中でも オコリザルは 怒っているらしい。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "あしばらい"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "メガトンパンチ"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card