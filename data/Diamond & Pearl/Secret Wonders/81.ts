import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Carvanha",
		fr: "Carvanha",
		de: "Kanivanha"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		318,
	],

	hp: 50,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Bite Away",
				fr: "Morsure énorme",
				de: "Wegbeißen"
			},
			effect: {
				en: "Flip a coin. If heads, choose a card from your opponent's hand without looking and discard it.",
				fr: "Lancez une pièce. Si c'est face, choisissez sans regarder une carte de la main de votre adversaire et défaussez-la.",
				de: "Wirf 1 Münze. Bei \"Kopf\" wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen) und lege sie auf seinen Ablagestapel."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277834
	}
}

export default card
