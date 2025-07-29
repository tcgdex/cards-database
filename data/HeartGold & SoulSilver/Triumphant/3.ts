import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Celebi",
		fr: "Celebi",
		de: "Celebi"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		251,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Future Sight",
				fr: "Prescience",
				de: "Seher"
			},
			effect: {
				en: "Look at the top 5 cards of either player’s deck and put them back on top of that player’s deck in any order.",
				fr: "Regardez les 5 cartes du dessus d’un deck (le vôtre ou celui de votre adversaire) et replacez-les au-dessus du même deck dans n’importe quel ordre.",
				de: "Schau dir die obersten 5 Karten eines Decks an und lege sie danach in beliebiger Reihenfolge wieder auf das Deck des Spielers zurück."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Leaf Bind",
				fr: "Lassofeuille",
				de: "Blattklammer"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "This Pokémon wanders across time. Grass and trees flourish in the forests in which it has appeared."
	},

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279533
	}
}

export default card
