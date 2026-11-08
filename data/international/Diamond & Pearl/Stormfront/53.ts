import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Bagon",
		'fr-fr': "Draby",
		'de-de': "Kindwurm"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		371,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'fr-fr': "Draby",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scary Face",
				'fr-fr': "Grimace",
				'de-de': "Grimasse"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon can't attack or retreat during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer ou battre en retraite lors du prochain tour de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" kann das Verteidigende Pokémon im nächsten Zug deines Gegners weder angreifen noch sich zurückziehen."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'boule",
				'de-de': "Kopfnuss"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Dreaming of one day flying, it practices by leaping off cliffs every day.",
		'fr-fr': "Il rêve de pouvoir voler un jour. Pour l'heure, il s'entraîne en sautant du haut des falaises."
	},

	thirdParty: {
		cardmarket: 278351,
		tcgplayer: 83698
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
