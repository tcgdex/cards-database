import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Snover",
		fr: "Blizzi",
		de: "Shnebedeck",
		it: "Snover",
		es: "Snover",
		pt: "Snover",
		'es-mx': "Snover"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",
	dexId: [459],

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Beat",
			fr: "Bataille",
			de: "Verprügler",
			it: "Battuta",
			es: "Toque",
			pt: "Pulso",
			'es-mx': "Golpeteo"
		},

		damage: 10
	}, {
		cost: ["Water", "Water"],

		name: {
			en: "Icy Snow",
			fr: "Verglas",
			de: "Eisiger Schnee",
			it: "Geloneve",
			es: "Nieve Helada",
			pt: "Neve Congelada",
			'es-mx': "Nieve Helada"
		},

		damage: 30
	}],

	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 654374,
		cardmarket: 851106
	}
}

export default card