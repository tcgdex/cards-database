import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Beheeyem",
		'fr-fr': "Neitram",
		'es-es': "Beheeyem",
		'it-it': "Beheeyem",
		'pt-br': "Beheeyem",
		'de-de': "Megalon"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		606,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Elgyem",
		'fr-fr': "Lewsor",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Lock Up",
				'fr-fr': "Cage",
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Damakinesis",
				'fr-fr': "Dégâkinésie",
			},
			effect: {
				'en-us': "Move 6 damage counters from any of your Pokémon to the Defending Pokémon.",
				'fr-fr': "Déplacez 6 marqueurs de dégâts de vos Pokémon vers le Pokémon Défenseur.",
			},

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
		'en-us': "Apparently, it communicates by flashing its three fingers, but those patterns haven't been decoded.",
	},

	thirdParty: {
		cardmarket: 280810,
		tcgplayer: 83780
	}
}

export default card
