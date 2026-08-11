import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Regice ex",
		'fr-fr': "Regice ex",
		'de-de': "Regice ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		378,
	],

	hp: 100,

	types: [
		"Water",
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Ice Beam",
				'fr-fr': "Laser glace",
				'de-de': "Eisstrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Iceberg Crush",
				'fr-fr': "Broyage d'iceberg",
				'de-de': "Zerschmetternder Eisberg"
			},
			effect: {
				'en-us': "If Regirock ex is in play, flip a coin. If heads, discard 1 Energy card attached to the Defending Pokémon.",
				'fr-fr': "Si Regirock ex est en jeu, lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Falls sich Regirock ex im Spiel befindet, wirf 1 Münze. Bei 'Kopf' lege 1 Energiekarte von dem Verteidigenden Pokémon auf den Ablagestapel deines Gegners."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	
	retreat: 3,

	thirdParty: {
		tcgplayer: 88660,
		cardmarket: 276609
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88660,
				cardmarket: 276609
			},
		},
	],
}

export default card
