import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Gyarados δ",
		'fr-fr': "Leviator δ",
		'de-de': "Garados"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 90,

	types: [
		"Lightning",
		"Metal",
	],

	evolveFrom: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Delta Reactor",
				'fr-fr': "Réacteur Delta",
				'de-de': "Delta-Reaktor"
			},
			effect: {
				'en-us': "As long as any Stadium card with Holon in its name is in play, each of your Pokémon that has δ on its card does 10 more damage to the Defending Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Tant que des cartes Stade dont le nom comporte Holon sont en jeu, chacun de vos Pokémon possédant le symbole δ inflige au Pokémon Défenseur 10 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'de-de': "Solange sich eine Stadion-Karte im Spiel befindet, die \"Holon\" im Namen hat, fügt jedes deiner Pokémon, auf dem δ zu sehen ist, dem Verteidigendem Pokémon 10 zusätzliche Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam",
				'fr-fr': "Ultralaser",
				'de-de': "Hyperstrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" lege 1 Energiekarte von dem Verteidigendem Pokémon auf den Ablagestapel deines Gegners."
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
				'en-us': "Heavy Impact",
				'fr-fr': "Gros impact",
				'de-de': "Schwerer Einschlag"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276978
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
	]
}

export default card
