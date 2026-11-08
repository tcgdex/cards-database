import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Nidorino",
		'fr-fr': "Nidorino Niv. 30",
		'de-de': "Nidorino"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [33],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Nidoran♂",
		'fr-fr': "Nidoran♂"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Toxic",
				'fr-fr': "Toxik",
				'de-de': "Toxin"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Placez 2 marqueurs de dégât au lieu d'1 sur le Pokémon Défenseur entre deux tours.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf das Verteidigende Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Frustration",
				'fr-fr': "Frustration",
				'de-de': "Frustration"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon that doesn't have any damage counters on it. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire qui ne possède pas de marqueurs de dégât. Cette attaque lui inflige 40 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				'de-de': "Wähle 1 Pokémon deines Gegners, auf dem keine Schadensmarken liegen. Dieser Angriff fügt dem gewählten Pokémon 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It has a violent disposition and stabs foes with its horn, which oozes poison upon impact."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278648,
				tcgplayer: 87746
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278648,
				tcgplayer: 87746
			}
		},
	],

}

export default card
