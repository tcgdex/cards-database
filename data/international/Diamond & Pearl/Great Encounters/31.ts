import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Weezing",
		'fr-fr': "Smogogo",
		'de-de': "Smogmog"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		110,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Koffing",
		'fr-fr': "Smogo",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Toxic Virus",
				'fr-fr': "Virus toxik",
				'de-de': "Giftvirus"
			},
			effect: {
				'en-us': "At any time between turns, each player puts 1 more damage counter on his or her Poisoned Pokémon.",
				'fr-fr': "N'importe quand entre deux tours, chaque joueur place 1 marqueur de dégât supplémentaire sur ses Pokémon Empoisonnés.",
				'de-de': "Jeder Spieler legt zu einem beliebigen Zeitpunkt zwischen zwei Zügen 1 Schadensmarke zusätzlich auf seine vergifteten Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Offensive Gas",
				'fr-fr': "Gaz offensif",
				'de-de': "Gasattacke"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus et Empoisonné.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt vergiftet und verwirrt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It grows by feeding on gases released by garbage. Though very rare, triplets have been found.",
	},

	thirdParty: {
		cardmarket: 277933,
		tcgplayer: 90562
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
