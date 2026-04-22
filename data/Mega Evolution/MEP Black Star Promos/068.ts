import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Makuhita",
		fr: "Makuhita",
		de: "Makuhita",
		it: "Makuhita",
		es: "Makuhita",
		pt: "Makuhita",
		'es-mx': "Makuhita"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "None",
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
			de: "Korkenzieherhieb",
			it: "Pugno Rotante",
			es: "Puño Tirabuzón",
			pt: "Soco Saca-rolha",
			'es-mx': "Puño Sacacorchos"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Confront",
			fr: "Confrontation",
			de: "Konfrontieren",
			it: "Confronto",
			es: "Confrontar",
			pt: "Confrontar",
			'es-mx': "Confrontar"
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
			type: "holo"
		}
	]
}

export default card
