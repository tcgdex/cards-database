import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Slowbro",
		'fr-fr': "Flagadoss",
		'de-de': "Lahmus"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		80,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Amnesia",
				'fr-fr': "Amnésie",
				'de-de': "Amnesie"
			},
			effect: {
				'en-us': "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				'fr-fr': "Choisissez 1 des attaques du Pokémon Défenseur. Il ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
				'de-de': "Wähle 1 Angriff des Verteidigenden Pokémon. Dieses Pokémon kann im nächsten Zug deines Gegners den gewählten Angriff nicht einsetzen."
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
				'en-us': "Zen Headbutt",
				'fr-fr': "Psykoud'Boul",
				'de-de': "Zen-Kopfstoß"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Though usually dim witted, it seems to become inspired if the SHELLDER on its tail bites down.",
	},

	thirdParty: {
		cardmarket: 277956,
		tcgplayer: 89306
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
