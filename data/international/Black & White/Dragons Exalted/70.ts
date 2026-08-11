import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Stunfisk",
		'fr-fr': "Limonde",
		'es-es': "Stunfisk",
		'it-it': "Stunfisk",
		'pt-br': "Stunfisk",
		'de-de': "Flunschlik"
	},

	illustrator: "HiRON",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		618,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Muddy Water",
				'fr-fr': "Ocroupi",
			},
			effect: {
				'en-us': "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rumble",
				'fr-fr': "Bagarre",
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It conceals itself in the mud of the seashore. Then it waits. When prey touch it, it delivers a jolt of electricity.",
	},

	thirdParty: {
		cardmarket: 280509,
		tcgplayer: 89581
	}
}

export default card
