import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Kadabra",
		fr: "Kadabra",
		de: "Kadabra"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		64,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Abra",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Recall",
				fr: "Rappel d'énergie",
				de: "Energierückgewinnung"
			},
			effect: {
				en: "Attach 2 basic Energy cards from your discard pile to Kadabra (1 if you have only 1).",
				fr: "Attachez 2 cartes Énergie de base de votre pile de défausse à Kadabra (1 seule si vous n'en avez qu'une).",
				de: "Lege 2 Basis-Energiekarten aus deinem Ablagestapel an Kadabra an (1, wenn du nur 1 hast)."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
				de: "Konfustrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274959,
		tcgplayer: 86406
	}
}

export default card
