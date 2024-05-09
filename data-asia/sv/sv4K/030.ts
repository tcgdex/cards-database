import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "デスマス"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Common",
	category: "Pokemon",
	dexId: [562],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "古代人の 魂が ポケモンに なった。 自分の 顔を 知る 人を 探し 遺跡を さまよう。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "ふきつなめ"
		},

		effect: {
			ja: "相手のポケモン1匹に、ダメカンを3個のせる。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2
}

export default card