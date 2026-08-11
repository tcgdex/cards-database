import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Totodile",
		fr: "Kaiminus",
		es: "Totodile",
		'es-mx': "Totodile",
		de: "Karnimani",
		it: "Totodile",
		pt: "Totodile"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	dexId: [158],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Lightning",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 886617,
				tcgplayer: 699872
			}
		},
	],
}

export default card
