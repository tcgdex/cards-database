import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Bellsprout",
		'fr-fr': "Chetiflor",
		'de-de': "Knofensa"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		69,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Vine Bind",
				'fr-fr': "Liane enroulante",
				'de-de': "Fesselranke"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon can't use any Poké-Powers during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas utiliser de Poké-Powers lors du prochain tour de votre adversaire.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" kann das Verteidigende Pokémon während des nächsten Zuges deines Gegners keine Poké-Power benutzen."
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Careless Tackle",
				'fr-fr': "Plaquage imprudent",
				'de-de': "Unvorsichtiger Tackle"
			},
			effect: {
				'en-us': "Bellsprout does 10 damage to itself.",
				'fr-fr': "Chetiflor s'inflige 10 dégâts.",
				'de-de': "Knofensa fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It prefers hot and humid environments. It is quick at capturing prey with its vines.",
		'fr-fr': "Il préfère les climats chauds et humides. Ses lianes peuvent capturer une proie en un clin d'œil."
	},

	thirdParty: {
		cardmarket: 278234,
		tcgplayer: 83809
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
