import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Espeon",
		'fr-fr': "Mentali",
		'de-de': "Psiana"
	},

	illustrator: "match",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [196],

	hp: 90,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Evoli"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Solar Suggestion",
				'fr-fr': "Suggestion solaire",
				'de-de': "Sonnen-Andeutung"
			},
			effect: {
				'en-us': "Move up to 4 damage counters from any of your Pokémon to any of your opponent's Pokémon in any way you like.",
				'fr-fr': "Retirez jusqu’à 4 marqueurs de dégât à vos Pokémon et placez-les comme vous le voulez sur les Pokémon de votre adversaire.",
				'de-de': "Verschiebe bis zu 4 Schadensmarken von beliebigen deiner Pokémon in beliebiger Verteilung auf die gegnerischen Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psybeam",
				'fr-fr': "Rafale psy",
				'de-de': "Psystrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt verwirrt."
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
		'en-us': "It uses the fine hair that covers its body to sense air currents and predict its enemy’s actions."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 279255,
				tcgplayer: 85322
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279255,
				tcgplayer: 85322
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 125043
			}
		},
	],
}

export default card
