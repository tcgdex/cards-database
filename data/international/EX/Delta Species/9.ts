import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Latios δ",
		'fr-fr': "Latios δ",
		'de-de': "Latios"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		381,
	],

	hp: 80,

	types: [
		"Lightning",
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Delta Aura",
				'fr-fr': "Aura Delta",
				'de-de': "Delta-Aura"
			},
			effect: {
				'en-us': "If you have Latias or Latias ex in play, the attack cost of Latios's Psychic Force is now Lightning Metal Colorless.",
				'fr-fr': "Si vous avez un Latias ou un Latias ex en jeu, le Coût de l'attaque Force psychique de Latios est maintenant .",
				'de-de': "Wenn du Latias oder Latias ex im Spiel hast, kostet Latios Psychomacht nur noch   ."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Claw",
				'fr-fr': "Dracogriffe",
				'de-de': "Drachenklaue"
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psychic Force",
				'fr-fr': "Force psychique",
				'de-de': "Psychomacht"
			},
			effect: {
				'en-us': "If your opponent has no Stage 2 Evolved Pokémon in play, this attack does nothing.",
				'fr-fr': "Si votre adversaire n'a pas de Pokémon Évolué de niveau 2 en jeu, cette attaque est sans effet.",
				'de-de': "Wenn dein Gegner kein entwickeltes Pokémon der Phase 2 im Spiel hat, hat dieser Angriff keine Auswirkung."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 2,

	thirdParty: {
		cardmarket: 276772
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
