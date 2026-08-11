import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Dialga",
		'fr-fr': "Dialga",
		'de-de': "Dialga"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		483,
	],

	hp: 100,

	types: [
		"Metal",
	],

	stage: "Basic",

	item: {
		name: {
			'fr-fr': "Orbe Adamant",
			'de-de': 'Adamant-Orb'
		},
		effect: {
			'fr-fr': "Si un Pokémon Actif possède une Faiblesse au type Metal, les attaques de Dialga infligent 20 dégâts supplémentaires à ce Pokémon (avant application de la Faiblesse et de la Résistance).",
			'de-de': 'Wenn ein Aktives Pokémon eine Schwäche gegen -Pokémon hat, fügen Dialgas Angriffe diesem Pokémon 20 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden).'
		}
	},

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Time Shift",
				'fr-fr': "Modification temporelle",
				'de-de': 'Zeitverschiebung'
			},
			effect: {
				'en-us': "Draw cards until you have 6 cards in your hand.",
				'fr-fr': "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
				'de-de': 'Ziehe so viele Karten, bis du 6 Karten auf der Hand hast. '
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Diamond Blast",
				'fr-fr': "Explosion diamant",
				'de-de': 'Diamantschuss'
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 60 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires.",
				'de-de': 'Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 60 Schadenspunkte plus 20 weitere Schadenspunkte zu. '
			},
			damage: "60+",

		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 278053,
		tcgplayer: 84800
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
