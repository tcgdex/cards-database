import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Deino",
		fr: "Solochi",
		es: "Deino",
		it: "Deino",
		pt: "Deino",
		de: "Kapuno"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		633,
	],

	hp: 60,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Deep Growl",
				fr: "Rugissement Profond",
				de: "Kraftvoller Knurrer"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt paralysiert."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Power Breath",
				fr: "Souffle Puissant",
				de: "Kraftvoller Atem"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It tends to bit everything, and it is not a picky eater. Approaching it carelessly is dangerous.",
		de: "Es beißt einfach alles und jeden und frisst, was ihm zwischen die Zähne kommt. Man nähert sich ihm besser mit Bedacht."
	},

	thirdParty: {
		cardmarket: 280532,
		tcgplayer: 84729
	}
}

export default card
