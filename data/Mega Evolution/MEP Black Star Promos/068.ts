import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Makuhita",
		fr: "Makuhita",
		es: "Makuhita",
		de: "Makuhita",
		it: "Makuhita",
		pt: "Makuhita",
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	dexId: [296],

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			es: "Puño Tirabuzón",
			de: "Korkenzieherhieb",
			it: "Pugno Rotante",
			pt: "Soco Saca-rolha",
		},

		damage: 10
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Confront",
			fr: "Confrontation",
			es: "Confrontar",
			de: "Konfrontieren",
			it: "Confronto",
			pt: "Confrontar",
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "I",

	weaknesses: [{
		type: "Psychic",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 879250,
				tcgplayer: 686275
			}
		},
	],
}

export default card
