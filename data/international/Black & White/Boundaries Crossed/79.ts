import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Sandslash",
		'fr-fr': "Sablaireau",
		'es-es': "Sandslash",
		'it-it': "Sandslash",
		'pt-br': "Sandslash",
		'de-de': "Sandamer"
	},

	illustrator: "BERUBURI",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		28,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Sandshrew",
		'fr-fr': "Sabelette",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Sand-Attack",
				'fr-fr': "Jet de Sable",
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, son attaque ne fait rien.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Earthquake",
				'fr-fr': "Séisme",
			},
			effect: {
				'en-us': "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 80,

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

	retreat: 1,

	description: {
		'en-us': "The spikes on its body are made up of its hardened hide. It rolls up and attacks foes with its spikes.",
	},

	thirdParty: {
		cardmarket: 280666,
		tcgplayer: 88935
	}
}

export default card
