import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Heliolisk",
		'fr-fr': "Iguolta",
	},

	illustrator: "kawayoo",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		695,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Helioptile",
		'fr-fr': "Galvaran",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Dry Skin",
				'fr-fr': "Peau Sèche",
			},
			effect: {
				'en-us': "Any damage done to this Pokémon by attacks from your opponent's Water Pokémon is reduced by 30 (after applying Weakness and Resistance).",
				'fr-fr': "Tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Water de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam",
				'fr-fr': "Ultralaser",
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They flare their frills and generate energy. A single Heliolisk can generate sufficient electricity to power a skyscraper.",
	},

	thirdParty: {
		cardmarket: 289710
	}
}

export default card
