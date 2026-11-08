import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Golduck",
		'fr-fr': "Akwakwak",
		'es-es': "Golduck",
		'it-it': "Golduck",
		'pt-br': "Golduck",
		'de-de': "Entoron"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		55,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Amnesia",
				'fr-fr': "Amnésie",
			},
			effect: {
				'en-us': "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				'fr-fr': "Choisissez 1 des attaques du Pokémon Défenseur. Le Pokémon ciblé ne peut pas utiliser l'attaque choisie pendant le prochain tour de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Aquafall",
				'fr-fr': "Aquasplash",
			},
			effect: {
				'en-us': "Discard all Energy attached to this Pokémon.",
				'fr-fr': "Défaussez toutes les Énergies attachées à ce Pokémon.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "When its forehead shines mysteriously, Golduck can use the full extent of its power.",
	},

	thirdParty: {
		cardmarket: 280621,
		tcgplayer: 85819
	}
}

export default card
