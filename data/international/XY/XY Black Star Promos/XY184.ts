import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Giratina",
		'fr-fr': "Giratina"
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		487,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Devour Light",
				'fr-fr': "Dévore Lumière"
			},
			effect: {
				'en-us': "Each Pokemon BREAK has no Abilities (this includes Abilities of its previous Evolution).",
				'fr-fr': "Aucun Pokémon TURBO n'a de talents (cela inclut les talents de sa précédente Évolution)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shadow Claw",
				'fr-fr': "Griffe Ombre"
			},
			effect: {
				'en-us': "Discard a random card from your opponent's hand.",
				'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire."
			},
			damage: 110,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It was banished for its violence. It silently gazed upon the old world from the Distortion World.",
	},

	thirdParty: {
		cardmarket: 295173
	}
}

export default card
