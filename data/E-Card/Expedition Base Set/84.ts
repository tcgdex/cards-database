import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Horsea",
		fr: "Kadabra",
		de: "Kadabra"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [116],

	hp: 40,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Abra",
		fr: "Abra"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bubble",
				fr: "Rappel d'énergie",
				de: "Energierückgewinnung"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
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
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86406,
				cardmarket: 274959
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
