import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Vaporeon",
		'fr-fr': "Aquali",
	},
	illustrator: "Illus. & Direc. The Pokémon Company Art Team",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		134,
	],
	hp: 110,
	types: [
		"Water",
	],
	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Évoli",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
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
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spiral Drain",
				'fr-fr': "Spirale Épuisante",
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		'en-us': "Its cell composition is similar to water molecules. As a result, it can melt away into water.",
	},
}

export default card
