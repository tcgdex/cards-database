import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		ja: "れんげきウーラオスV"
	},

	illustrator: "Ryota Murayama",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [892],
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			ja: "ひるがえす"
		},

		effect: {
			ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。"
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			ja: "ひゃくれつラッシュ"
		},

		damage: 150,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 538693, tcgplayer: 569118, cardtrader: 240088 } }
	]
}

export default card
