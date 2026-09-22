import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Makuhita",
		es: "Makuhita",
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
			es: "Puño Tirabuzón",
		},

		damage: 10
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Confront",
			es: "Confrontar",
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
