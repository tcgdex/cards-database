import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Leafeon",
		'fr-fr': "Phyllali",
	},
	illustrator: "Illus. & Direc. The Pokémon Company Art Team",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		470,
	],
	hp: 90,
	types: [
		"Grass",
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
				'en-us': "Quick Attack",
				'fr-fr': "Vive-Attaque",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Energy Assist",
				'fr-fr': "Assistance Énergétique",
			},
			effect: {
				'en-us': "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "It basically does not fight. With cells similar to those of plants, it can perform photosynthesis.",
	},
}

export default card
