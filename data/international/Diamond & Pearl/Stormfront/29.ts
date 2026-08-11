import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Tangrowth",
		'fr-fr': "Bouldeneu",
		'de-de': "Tangoloss"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		465,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Tangela",
		'fr-fr': "Saquedeneu",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Green Renewal",
				'fr-fr': "Renouvellement vert",
				'de-de': "Grüne Erneuerung"
			},
			effect: {
				'en-us': "Remove 1 damage counter from Tangrowth between turns.",
				'fr-fr': "Retirez à Bouldeneu 1 marqueur de dégât entre deux tours.",
				'de-de': "Entferne zwischen den Zügen 1 Schadensmarke von Tangoloss."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Green Acid",
				'fr-fr': "Acide vert",
				'de-de': "Grüne Säure"
			},
			effect: {
				'en-us': "Flip 2 coins. If the first coin is heads, the Defending Pokémon is now Confused. If the second coin is heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez 2 pièces. Si la première pièce est face, le Pokémon Défenseur est maintenant Confus. Si la deuxième pièce est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Wirf 2 Münzen. Wenn die erste Münze \"Kopf\" gezeigt hat, ist das Verteidigende Pokémon jetzt verwirrt. Wenn die zweite Münze \"Kopf\" gezeigt hat, ist das Verteidigende Pokémon jetzt vergiftet."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Reaching Vine",
				'fr-fr': "Liane d'accès",
				'de-de': "Greifranke"
			},
			effect: {
				'en-us': "Does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt 2 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 278327,
		tcgplayer: 89752
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
