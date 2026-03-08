import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Regice ex",
		fr: "Regice ex",
		de: "Regice ex"
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

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Ice Beam",
				fr: "Laser glace",
				de: "Eisstrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt gelähmt."
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
				en: "Iceberg Crush",
				fr: "Broyage d'iceberg",
				de: "Zerschmetternder Eisberg"
			},
			effect: {
				en: "If Regirock ex is in play, flip a coin. If heads, discard 1 Energy card attached to the Defending Pokémon.",
				fr: "Si Regirock ex est en jeu, lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				de: "Falls sich Regirock ex im Spiel befindet, wirf 1 Münze. Bei 'Kopf' lege 1 Energiekarte von dem Verteidigenden Pokémon auf den Ablagestapel deines Gegners."
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
		},
	]
}

export default card
