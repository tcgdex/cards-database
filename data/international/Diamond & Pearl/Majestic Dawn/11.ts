import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Palkia",
		'fr-fr': "Palkia",
		'de-de': "Palkia"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		484,
	],

	hp: 100,

	types: [
		"Water",
	],

	stage: "Basic",

	item: {
		name: {
			'fr-fr': "Orbe Perlé",

		},
		effect: {
			'fr-fr': "Si un Pokémon Actif possède une Faiblesse au type Water, les attaques de Palkia infligent 20 dégâts supplémentaires à ce Pokémon (avant application de la Faiblesse et de la Résistance).",

		}
	},

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Zone Shift",
				'fr-fr': "Changement de zone",
				'de-de': 'Zonenwechsel'
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Défenseur Pokémon avec 1 de ses Pokémon de Banc.",
				'de-de': 'Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus. '
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pearl Blast",
				'fr-fr': "Explosion perle",
				'de-de': 'Perlschuss'
			},
			effect: {
				'en-us': "You may return an Energy card attached to Palkia to your hand. If you do, choose an Energy card attached to the Defending Pokémon and return it to your opponent's hand.",
				'fr-fr': "Vous pouvez reprendre dans votre main une carte Énergie attachée à Palkia. Choisissez alors une carte Énergie attachée au Pokémon Défenseur et demandez à votre adversaire de la reprendre dans sa main.",
				'de-de': 'Du kannst eine an Palkia angelegte Energiekarte zurück auf deine Hand nehmen. Wenn du das machst, wähle 1 am Verteidigenden Pokémon angelegte Energiekarte. Dein Gegner nimmt die gewählte Energiekarte auf die Hand. '
			},
			damage: 60,

		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 278060,
		tcgplayer: 87908
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
