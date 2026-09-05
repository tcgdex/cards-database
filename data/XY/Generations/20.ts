import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Cloyster",
		fr: "Crustabri",
		de: "Austos"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		91,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Shellder",
		fr: "Kokiyas",
		de: "Muschas"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Clamp Crush",
				fr: "Pince Broyeuse",
				de: "Quetschklammer"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed and discard an Energy attached to that Pokémon.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé, et vous défaussez une Énergie lui étant attachée.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Aktive Pokémon deines Gegners jetzt paralysiert. Lege 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Spike Cannon",
				fr: "Picanon",
				de: "Dornkanone"
			},
			effect: {
				en: "Flip 5 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 5 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 5 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "Cloyster that live in seas with harsh tidal currents grow large, sharp spikes on their shells.",
		de: "Austos, die im Meer mit starker Strömung leben, werden groß und entwickeln scharfe Stacheln."
	},

	thirdParty: {
		cardmarket: 288460,
		tcgplayer: 113678
	}
}

export default card
