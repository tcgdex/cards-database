import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "チヲハウハネ"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [988],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "古い 本で チヲハウハネと 紹介されている 生物に 似た点が ある 謎のポケモン。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ふみならす"
		},

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。"
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "ねっしょうどとう"
		},

		damage: 120,

		effect: {
			ja: "このポケモンにも90ダメージ。相手のバトルポケモンをやけどにする。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3
}

export default card