import { Card } from 'models/database/card'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	dexId: [380],
	set: Set,

	name: {
		'en-us': "Latias",
		'fr-fr': "Latias"
	},

	illustrator: "Nakaoka",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 70,

	types: [
		"Colorless"
	],

	attacks: [{
		cost: [
			"Fire",
		],
		name: {
			'en-us': "Dragon Dew",
			'fr-fr': "Goutte de dragon"
		},
		effect: {
			'en-us': "Remove 1 damage counter from 1 of your Pokémon.",
			'fr-fr': "Retirez 1 marqueur de dégât à 1 de vos Pokémon."
		},
		damage: 10
	}, {
		cost: [
			"Fire",
			"Fire",
			"Colorless"
		],
		name: {
			'en-us': "Heat Blast",
			'fr-fr': "Explosion de chaleur"
		},
		damage: 40
	}],

	weaknesses: [
		{
			type: "Psychic",
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275772,
				tcgplayer: 86650
			}
		},
	],

}

export default card
