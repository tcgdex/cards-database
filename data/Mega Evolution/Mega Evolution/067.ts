import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Gimmighoul",
		fr: "Mordudor",
		de: "Gierspenst",
		it: "Gimmighoul",
		es: "Gimmighoul",
		pt: "Gimmighoul",
		'es-mx': "Gimmighoul"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	dexId: [999],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Slap",
			fr: "Gifle",
			de: "Hieb",
			it: "Sberla",
			es: "Bofetón",
			pt: "Tapa",
			'es-mx': "Bofetón"
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654406,
		cardmarket: 851138
	}
}

export default card