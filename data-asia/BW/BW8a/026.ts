import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "デスマス"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	dexId: [562],
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "お墓に 埋葬された 人の 魂が ポケモンに 変化した。 死ぬ前の 記憶が 残っている。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "いたみをうつす"
		},

		effect: {
			ja: "自分の場のポケモンにのっているダメカンを1個選び、相手の場のポケモンにのせ替える。"
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	retreat: 2,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567869, tcgplayer: 602226, cardtrader: 143001 }, stamp: ["1st-edition"] }
	]
}

export default card
